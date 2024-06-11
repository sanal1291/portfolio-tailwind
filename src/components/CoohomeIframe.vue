<template>
    <div v-if="loading" class="loader-container">
        <p>Loading...</p> <!-- Replace with a more sophisticated loader if needed -->
    </div>
    <div v-else class="iframe-container relative">
        <iframe type="text/javascript" width="100%" height="100%" scrolling="no" :src="finalUrl"
            frameborder="0"></iframe>
        <div class="w-[60px] h-[300px] absolute top-0 right-0 z-[2000]"></div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const loading = ref(true);
        const urlMapping = ref({});
        const finalUrl = ref('');
        const route = useRoute();

        const fetchGoogleSheetData = async () => {
            const sheetsAPIKey = 'AIzaSyBaOU3lZ806zg80lyvZn_jPfKiyjfVFvO4';
            const spreadsheetId = '1cr7-4SknFi3vuKuDG9nuxKG4P_4zJU9Xi94_Q3aAKag';
            const range = 'Sheet1!A:B';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${sheetsAPIKey}`;

            try {
                console.log("rows");
                const response = await fetch(url);
                const data = await response.json();
                const rows = data.values;
                console.log("rows");
                console.log(rows);
                const mapping = {};
                rows.forEach(row => {
                    if (row[0] && row[1]) {
                        mapping[`/3dmodels/${row[0]}`] = row[1];
                    }
                });

                urlMapping.value = mapping;
                console.log(mapping);
            } catch (error) {
                console.error('Error fetching Google Sheet data:', error);
            } finally {
                updateFinalUrl();
                loading.value = false;
            }
        };

        const updateFinalUrl = () => {
            console.log("fullPath");
            console.log(route.fullPath);
            finalUrl.value = urlMapping.value[route.fullPath] || 'https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FO9AXW8FG5K&locale=en_US';
        };

        onMounted(() => {
            fetchGoogleSheetData();
        });

        watch(() => route.fullPath, updateFinalUrl);

        return { loading, finalUrl };
    }
};
</script>

<style scoped>
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.iframe-container {
    width: 100vw;
    height: 100vh;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>