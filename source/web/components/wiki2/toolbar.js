/**
 * Copyright (C) 2005-2012 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */
 
/**
 * Wiki2 Toolbar component.
 * 
 * @namespace Alfresco
 * @class Alfresco.Wiki2Toolbar
 */
(function()
{
   /**
    * YUI Library aliases
    */
   var Dom = YAHOO.util.Dom,
      Event = YAHOO.util.Event,
      Element = YAHOO.util.Element;

   /**
    * Alfresco Slingshot aliases
    */
   var $html = Alfresco.util.encodeHTML,
      $combine = Alfresco.util.combinePaths,
      $siteURL = Alfresco.util.siteURL;

   
   /**
    * Wiki2Toolbar constructor.
    * 
    * @param {String} htmlId The HTML id of the parent element
    * @return {Alfresco.Wiki2Toolbar} The new Wiki2Toolbar instance
    * @constructor
    */
   Alfresco.Wiki2Toolbar = function(htmlId)
   {
      Alfresco.DocListToolbar.superclass.constructor.call(this, "Alfresco.Wiki2Toolbar", htmlId, ["button", "menu", "container"]);

      
      // Initialise prototype properties
      this.selectedFiles = [];
      this.currentFilter = {};
      this.dynamicControls = [];
      this.doclistMetadata = {};
      this.actionsView = "browse";
      
      // Decoupled event listeners
      YAHOO.Bubbling.on("filterChanged", this.onFilterChanged, this);
      YAHOO.Bubbling.on("deactivateAllControls", this.onDeactivateAllControls, this);
      YAHOO.Bubbling.on("deactivateDynamicControls", this.onDeactivateDynamicControls, this);
      YAHOO.Bubbling.on("selectedFilesChanged", this.onSelectedFilesChanged, this);
      YAHOO.Bubbling.on("userAccess", this.onUserAccess, this);
      YAHOO.Bubbling.on("doclistMetadata", this.onDoclistMetadata, this);
      YAHOO.Bubbling.on("showFileUploadDialog", this.onFileUpload, this);
      YAHOO.Bubbling.on("dropTargetOwnerRequest", this.onDropTargetOwnerRequest, this);
      YAHOO.Bubbling.on("documentDragOver", this.onDocumentDragOver, this);
      YAHOO.Bubbling.on("documentDragOut", this.onDocumentDragOut, this);
      YAHOO.Bubbling.on("registerAction", this.onRegisterAction, this);
     
      
      return this;
   };

   /**
    * Extend from Alfresco.component.Base
    */
   YAHOO.extend(Alfresco.Wiki2Toolbar, Alfresco.DocListToolbar);
   
   /**
    * Augment prototype with main class implementation, ensuring overwrite is enabled
    */
   YAHOO.lang.augmentObject(Alfresco.Wiki2Toolbar.prototype,
   {
      onReady: function Wiki2_onReady()
      {
        Alfresco.Wiki2Toolbar.superclass.onReady.call(this);
        alert(this.id);
        YAHOO.util.Dom.setStyle([this.id + '-createContent-button', this.id + '-newFolder-button-button', 'template_x002e_categories_x002e_wiki2', 'template_x002e_documentlist_x002e_wiki2_x0023_default-showFolders-button'],'display', 'none');
      }
   },true);
})();