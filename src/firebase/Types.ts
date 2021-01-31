export interface menu {
    menu: {
      categories: [
        {
          name: string;
          description: string;
        }
      ];
      optionGroups: [];
      item: [
        {
          name: string;
          price: string;
          description: string;
          categories: [];
          optionGroups: [];
        }
      ];
    };
};