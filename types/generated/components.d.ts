import type { Schema, Struct } from '@strapi/strapi';

export interface ScheduleItemDay extends Struct.ComponentSchema {
  collectionName: 'components_schedule_item_days';
  info: {
    displayName: 'day';
  };
  attributes: {};
}

export interface ScheduleItemFields extends Struct.ComponentSchema {
  collectionName: 'components_schedule_item_fields';
  info: {
    displayName: 'fields';
  };
  attributes: {
    costructor: Schema.Attribute.String;
    endTime: Schema.Attribute.Time & Schema.Attribute.Required;
    startTime: Schema.Attribute.Time & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'schedule-item.day': ScheduleItemDay;
      'schedule-item.fields': ScheduleItemFields;
    }
  }
}
