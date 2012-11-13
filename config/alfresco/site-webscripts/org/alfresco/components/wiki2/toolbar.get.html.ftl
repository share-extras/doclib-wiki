<#include "../documentlibrary/include/toolbar.lib.ftl" />

<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/wiki2/toolbar.css" group="wiki2"/>
   <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/documentlibrary/toolbar.css" group="documentlibrary"/>
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" src="${url.context}/res/components/wiki2/toolbar.js" group="wiki2"/>
   <@script type="text/javascript" src="${url.context}/res/components/documentlibrary/toolbar.js" group="documentlibrary"/>
</@>

<@markup id="widgets">
   <@createWidgets group="documentlibrary"/>
</@>

<@uniqueIdDiv>
   <@markup id="html">
      <@toolbarTemplate/>
   </@>
</@>