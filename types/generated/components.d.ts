import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAlterBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_alter_blocks';
  info: {
    description: '';
    displayName: 'Alter Block';
  };
  attributes: {
    data_component: Schema.Attribute.Component<
      'helpers.alter-blocks-data-component',
      true
    >;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface BlocksLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_pages';
  info: {
    description: '';
    displayName: 'Landing Page';
  };
  attributes: {
    backgroundMedia: Schema.Attribute.Media<'images' | 'videos'>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HelpersAlterBlocksDataComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_helpers_alter_blocks_data_components';
  info: {
    displayName: 'Alter Blocks Data Component';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.alter-block': BlocksAlterBlock;
      'blocks.landing-page': BlocksLandingPage;
      'helpers.alter-blocks-data-component': HelpersAlterBlocksDataComponent;
    }
  }
}
