<@markup id="additional-js" target="js" action="after">
   <@script type="text/javascript" src="${page.url.context}/res/components/preview/Markdown.js" group="${dependencyGroup}"></@script>
</@>
<@markup id="additional-css" target="css" action="after">
   <@link href="${url.context}/res/components/preview/Markdown.css" group="${dependencyGroup}"/>
</@>