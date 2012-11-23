<#assign id=args.htmlid?html>
<@markup id="createcontent_newpage" target="createContent" action="after">
	 <div class="hideable toolbar-hidden DocListTree">
	    <div class="new-page">
	       <span id="${id}-createPage-button" class="yui-button yui-push-button">
	          <span class="first-child">
	             <button name="newPage">${msg("button.new-page")}</button>
	          </span>
	       </span>
	    </div>
	 </div>
</@markup>