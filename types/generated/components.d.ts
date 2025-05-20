import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_landing_pages';
  info: {
    displayName: 'Landing Page';
  };
  attributes: {
    backgroundMedia: Schema.Attribute.Media<'images' | 'videos', true>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.landing-page': BlocksLandingPage;
    }
  }
}
