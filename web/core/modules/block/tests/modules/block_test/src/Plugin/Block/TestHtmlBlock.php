<?php

namespace Drupal\block_test\Plugin\Block;

use Drupal\Core\Block\Attribute\Block;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\StringTranslation\TranslatableMarkup;

/**
 * Provides a block to test HTML.
 */
#[Block(
  id: "test_html",
  admin_label: new TranslatableMarkup("Test HTML block"),
)]
class TestHtmlBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attributes' => \Drupal::state()->get('block_test.attributes'),
      '#children' => \Drupal::state()->get('block_test.content'),
    ];
  }

}
