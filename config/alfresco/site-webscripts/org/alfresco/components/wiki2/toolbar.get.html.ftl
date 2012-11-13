<#include "include/toolbar.lib.ftl" />

<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/wiki2/toolbar.css" group="wiki2"/>
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" src="${url.context}/res/components/wiki2/toolbar.js" group="wiki2"/>
</@>

<@markup id="widgets">
   <@createWidgets group="wiki2"/>
</@>

<@uniqueIdDiv>
   <@markup id="html">
      <@toolbarTemplate/>
   </@>
</@>