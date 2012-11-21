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
      fn: function DL_onActionDuplicate(asset)
      {
         Alfresco.util.PopupManager.displayPrompt({
            text: Alfresco.util.message("message.duplicate.enterName")
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