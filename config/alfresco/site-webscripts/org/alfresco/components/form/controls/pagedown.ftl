<#include "common/editorparams.inc.ftl" />

<#if field.control.params.rows??><#assign rows=field.control.params.rows><#else><#assign rows=8></#if>
<#if field.control.params.columns??><#assign columns=field.control.params.columns><#else><#assign columns=60></#if>

<#if form.capabilities?? && form.capabilities.javascript?? && form.capabilities.javascript == false><#assign jsDisabled=true><#else><#assign jsDisabled=false></#if>

<#-- NOTE: content properties are not shown at all in view mode -->

<#if form.mode != "view">
<div class="form-field" id="${fieldHtmlId}-field">
   <#if jsDisabled == false>
   <script type="text/javascript">//<![CDATA[
   (function()
   {
      new Alfresco.ContentControl("wmd-input-${fieldHtmlId}").setOptions(
      {
         <#if form.mode == "view" || (field.disabled && !(field.control.params.forceEditable?? && field.control.params.forceEditable == "true"))>disabled: true,</#if>
         currentValue: "${field.value?js_string}",
         mandatory: ${field.mandatory?string},
         formMode: "${form.mode}",
         <#if context.properties.nodeRef??>
         nodeRef: "${context.properties.nodeRef?js_string}",
         <#elseif form.mode == "edit" && args.itemId??>
         nodeRef: "${args.itemId?js_string}",
         <#else>
         nodeRef: "",
         </#if>
         mimeType: "${(context.properties.mimeType!"")?js_string}",
         <#if field.control.params.plainMimeTypes??>plainMimeTypes: "${field.control.params.plainMimeTypes}",</#if>
         <#if field.control.params.richMimeTypes??>richMimeTypes: "${field.control.params.richMimeTypes}",</#if>
         <#if field.control.params.imageMimeTypes??>imageMimeTypes: "${field.control.params.imageMimeTypes}",</#if>
         <#if field.control.params.forceEditor??>forceEditor: ${field.control.params.forceEditor},</#if>
         <#if field.control.params.forceContent??>forceContent: ${field.control.params.forceContent},</#if>
         <@editorParameters field />
      }).setMessages(
         ${messages}
      );
      YAHOO.util.Event.onContentReady("wmd-input-${fieldHtmlId}", function() {
        var converter2 = new Markdown.Converter();
        
        var help = function () { alert("Do you need help?"); }
        var options = {
            helpButton: { handler: help },
            strings: { quoteexample: "whatever you're quoting, put it right here" }
        };
        var editor2 = new Markdown.Editor(converter2, "-${fieldHtmlId}", options);
        
        editor2.run();
        });
   })();
   //]]></script>
   </#if>
   <label for="wmd-input-${fieldHtmlId}">${field.label?html}:<#if field.mandatory><span class="mandatory-indicator">${msg("form.required.fields.marker")}</span></#if></label>
<div class="wmd-panel">
            <div id="wmd-button-bar-${fieldHtmlId}"></div>
   <textarea id="wmd-input-${fieldHtmlId}" name="${field.name}" rows="${rows}" columns="${columns}" tabindex="0"
             <#if field.description??>title="${field.description?html}"</#if>
             <#if field.control.params.styleClass??>class="${field.control.params.styleClass}"</#if>
             <#if field.control.params.style??>style="${field.control.params.style}"</#if>
             <#if field.disabled && !(field.control.params.forceEditable?? && field.control.params.forceEditable == "true")>disabled="true"</#if>><#if jsDisabled>${field.content?html}</#if></textarea>
      <div id="wmd-preview-${fieldHtmlId}" class="wmd-preview"></div>
      </div>
</div>
</#if>