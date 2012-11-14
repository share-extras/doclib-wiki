/*
 * Copyright (C) 2010-2012 Share Extras Contributors.
 */

/**
 * Document Library plug-in for displaying Markdown content in Share.
 *
 * Supports the "text/x-markdown" mime type.
 *
 * @namespace Alfresco.WebPreview.prototype.Plugins
 * @class Alfresco.WebPreview.prototype.Plugins.Markdown
 */
(function()
{
   /**
    * Markdown plug-in constructor
    *
    * @param wp {Alfresco.WebPreview} The Alfresco.WebPreview instance that decides which plugin to use
    * @param attributes {Object} Arbitrary attributes brought in from the <plugin> element
    */
   Alfresco.WebPreview.prototype.Plugins.Markdown = function(wp, attributes)
   {
      this.wp = wp;
      this.attributes = YAHOO.lang.merge(Alfresco.util.deepCopy(this.attributes), attributes);
      return this;
   };
    
   Alfresco.WebPreview.prototype.Plugins.Markdown.prototype =
   {
      /**
       * Attributes
       */
      attributes:
      {
      },
   
      /**
       * Tests if the plugin can be used in the users browser.
       *
       * @method report
       * @return {String} Returns nothing if the plugin may be used, otherwise returns a message containing the reason
       *         it cant be used as a string.
       * @public
       */
      report: function Markdown_report()
      {
      },
   
      /**
       * Display the node.
       *
       * @method display
       * @public
       */
      display: function Markdown_display()
      {
         Alfresco.util.Ajax.jsonGet({
            url: this.wp.getContentUrl(),
            successCallback: {
               fn: function onSuccess(p_obj) {
                  //var converter = new Markdown.getSanitizingConverter();
                  var converter = new Markdown.Converter();
                  this.wp.getPreviewerElement().innerHTML = converter.makeHtml(p_obj.serverResponse.responseText);
               },
               scope: this
            }
         });
      }
   };

})();
