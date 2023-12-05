import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectGalery extends Schema.Component {
  collectionName: 'components_project_galeries';
  info: {
    displayName: 'Galery';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Images: Attribute.Media & Attribute.Required;
    MainImage: Attribute.Media;
  };
}

export interface ProjectMember extends Schema.Component {
  collectionName: 'components_project_members';
  info: {
    displayName: 'Member';
    icon: 'user';
    description: '';
  };
  attributes: {
    Firstname: Attribute.String & Attribute.Required;
    Surname: Attribute.String & Attribute.Required;
    Field_of_activity: Attribute.String & Attribute.Required;
  };
}

export interface ProjectSemester extends Schema.Component {
  collectionName: 'components_project_semesters';
  info: {
    displayName: '..';
    description: '';
  };
  attributes: {
    Degree: Attribute.Enumeration<['Bachelor', 'Master']> & Attribute.Required;
    Semester: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }>;
    Department: Attribute.Enumeration<
      ['Medientechnik und -design', 'Digital Arts', 'Interactive Media']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.galery': ProjectGalery;
      'project.member': ProjectMember;
      'project.semester': ProjectSemester;
    }
  }
}
