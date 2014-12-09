<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php if ($title_prefix || $title_suffix || $display_submitted || !$page): ?>
  <header>
    <?php print render($title_prefix); ?>
    <?php if (!$page): ?>
      <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
    <?php endif; ?>
    <?php print render($title_suffix); ?>

    <?php if ($display_submitted): ?>
      <div class="submitted">
        <?php print $user_picture; ?>
        <span class="glyphicon glyphicon-calendar"></span> <?php print $submitted; ?>
      </div>
    <?php endif; ?>
  </header>
  <?php endif; ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      hide($content['field_tags']);
      // print render($content);
      // print render($content['product:field_shoe_image']);
      // dd($content,'ddlog_shoe');
    ?>
    <div class="row">
      <div class="col-md-8"><?php print render($content['product:field_shoe_image']); ?></div>
      <div class="col-md-4"><?php $content_tmp=$content; $content_tmp['product:field_shoe_image']=''; $content_tmp['body']=''; print render($content_tmp); ?></div>
    </div>
    <div class="row">
      <div class="col-md-12"><?php print render($content['body']); ?></div>
    </div>
  </div>
  <p> This is shoe 17.</p>
  <?php if (!empty($content['field_tags']) || !empty($content['links'])): ?>
    <footer>
    <?php print render($content['field_tags']); ?>
    <?php print render($content['links']); ?>
    </footer>
  <?php endif; ?>

  <?php print render($content['comments']); ?>

</article>
