(function($) {

/**
 * Attach this editor to a target element.
 */
Drupal.wysiwyg.editor.attach.ueditor = function (context, params, settings) {
  var editorOption = {
    lang: settings['language'],
    zIndex: settings['zindex'],
    initialContent: settings['initialContent'],
    serverUrl: settings['serverUrl'],
    toolbars: settings['toolbars'],
    autoHeightEnabled: settings['auto_height'],
    autoFloatEnabled: settings['auto_float'],
    allowDivTransToP: settings['allowdivtop'],
    pageBreakTag: settings['pageBreakTag'],
  };
  var editor = new baidu.editor.ui.Editor(editorOption);
  // Attach editor.
  editor.render(params.field);

  Drupal.wysiwyg.instances[params.field]['rendered'] = editor;
};

/**
 * Detach a single or all editors.
 */
Drupal.wysiwyg.editor.detach.ueditor = function (context, params, trigger) {
  if (trigger === 'unload') {
    // Get editor.
    var editor = Drupal.wysiwyg.instances[params.field]['rendered'];
    // Move content to original textarea.
    $('textarea#' + params.field).val(editor.getContent());
    // Show for original textarea.
    $('textarea#' + params.field).show();
    // Remove and destroy editor.
    $('div#' + params.field).remove();
    editor.destroy();
  }
};

})(jQuery);
