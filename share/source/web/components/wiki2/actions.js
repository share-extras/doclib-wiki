/**
 * Document library Duplicate action
 * 
 * @namespace Alfresco
 * @class Alfresco.doclib.Actions
 */
(function()
{
   /**
    * Duplicate the node to a new item in the same space but with a new name
    *
    * @method onActionDuplicate
    * @param asset {object} Object literal representing one file or folder to be actioned
    */
   YAHOO.Bubbling.fire("registerAction",
   {
      actionName: "onActionDuplicate",
      fn: function DL_onActionDuplicate(record)
      {
         Alfresco.util.PopupManager.getUserInput({
        	title: Alfresco.util.message("title.duplicateWikiPage"),
            text: Alfresco.util.message("message.duplicate.enterName"),
            input: "text",
            callback: {
               fn: function(p_name) {
            	   var parentNodeRef = record.parent.nodeRef;
            	   var fnSuccess = function(p_data)
            	   {
                     var result,
                        successCount = p_data.json.successCount,
                        failureCount = p_data.json.failureCount;
                     YAHOO.Bubbling.fire("filesCopied",
                     {
                        destination: this.currentPath,
                        successCount: successCount,
                        failureCount: failureCount
                     });
            	   }
            	   var webscriptName = "duplicate/node/{nodeRef}",
                     nodeRef = new Alfresco.util.NodeRef(parentNodeRef);
                     
                  this.modules.actions.genericAction(
                  {
                     success:
                     {
                        callback:
                        {
                           fn: fnSuccess,
                           scope: this
                        }
                     },
                     failure:
                     {
                        message: this.msg("message.duplicate.failure", record.displayName)
                     },
                     webscript:
                     {
                        method: Alfresco.util.Ajax.POST,
                        name: webscriptName,
                        params:
                        {
                           nodeRef: nodeRef.uri
                        }
                     },
                     wait:
                     {
                        message: this.msg("message.please-wait")
                     },
                     config:
                     {
                        requestContentType: Alfresco.util.Ajax.JSON,
                        dataObj:
                        {
                           nodeRefs: [record.nodeRef],
                           parentId: parentNodeRef,
                           name: p_name
                        }
                     }
                  });
               },
               scope: this
            }
         });
      }
   });
   
   if (Alfresco.DocumentList)
   {
      YAHOO.Bubbling.fire("registerRenderer",
      {
         propertyName: "wikiPage.abstract",
         renderer: function(record, label)
         {
            return "<span class=\"faded\">My custom renderer</span>";
         }
      });
   }
})();