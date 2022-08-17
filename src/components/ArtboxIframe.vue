<template >
    <iframe type="text/javascript" width="100%" height="100%" scrolling="no" :src="finalUrl" frameborder="0"></iframe>
</template>
<script>
export default {
    setup() {
        var url = location.search;

        var paramRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                paramRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
            }
        }
        var id = paramRequest['picId'];
        const finalUrl = "https://www.artboxxstudio.com/designs/design/3FO3WJUTTGLT/show?kpm=Nnw.6f35aa744ade41e8.7dbcc3c.1660125904133" + id;
        return { finalUrl }
    }
}
</script>