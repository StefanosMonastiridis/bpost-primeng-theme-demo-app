import { Component } from '@angular/core';



@Component({
  templateUrl: "./colours.component.html",
  providers: [],
})
export class ColoursComponent {
  semanticColors = [
    {
      bgName: "color-primary-low-light",
      bgHex: "#FFEDEB",
      fgName: "color-primary-higher-light",
      fgHex: "#580A10",
    },
    {
      bgName: "color-primary-default-light",
      bgHex: "#DD1829",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
    {
      bgName: "color-primary-high-light",
      bgHex: "#B11321",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },

    {
      bgName: "color-secondary-low-light",
      bgHex: "#D9EAF1",
      fgName: "color-secondary-default-light",
      fgHex: "#347794",
    },
    {
      bgName: "color-secondary-default-light",
      bgHex: "#347794",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
    {
      bgName: "color-secondary-high-light",
      bgHex: "#B11321",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },

    {
      bgName: "color-info-low-light",
      bgHex: "#CECEFF",
      fgName: "color-info-default-light",
      fgHex: "#5355BB",
    },
    {
      bgName: "color-info-default-light",
      bgHex: "#5355BB",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
    {
      bgName: "color-info-high-light",
      bgHex: "#40429E",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },

    {
      bgName: "color-validation-low-light",
      bgHex: "#E7F3E7",
      fgName: "color-validation-default-light",
      fgHex: "#366936",
    },
    {
      bgName: "color-validation-default-light",
      bgHex: "#366936",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
    {
      bgName: "color-validation-high-light",
      bgHex: "#294F29",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },

    {
      bgName: "color-warning-low-light",
      bgHex: "#FFF7E2",
      fgName: "color-warning-higher-light",
      fgHex: "#664E0E",
    },
    {
      bgName: "color-warning-default-light",
      bgHex: "#FFC222",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
    {
      bgName: "color-warning-high-light",
      bgHex: "#366936",
      fgName: "color-text-bright-light",
      fgHex: "#191C1D",
    },

    {
      bgName: "color-error-low-light",
      bgHex: "#FFEDE6",
      fgName: "color-warning-higher-light",
      fgHex: "#511F00",
    },
    {
      bgName: "color-error-default-light",
      bgHex: "#448344",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
    {
      bgName: "color-error-high-light",
      bgHex: "#366936",
      fgName: "color-text-bright-light",
      fgHex: "#FFFFFF",
    },
  ];

  neutralColors = [
    {
      bgName: "color-surface-lowest-light",
      bgHex: "#F7FAF9",
      fgNamePrimary: "color-text-primary-light",
      fgPrimaryHex: "#576062",
      fgNameSecondary: "color-text-secondary-light",
      fgSecondaryHex: "#576062",
      description: "default background colour for all screens",
    },

    {
      bgName: "color-surface-low-light",
      bgHex: "#FFFFFF",
      fgNamePrimary: "color-text-primary-light",
      fgPrimaryHex: "#576062",
      fgNameSecondary: "color-text-secondary-light",
      fgSecondaryHex: "#576062",
      description: "default background colour for all containers",
    },

    {
      bgName: "color-surface-high-light",
      bgHex: "#F2F4F4",
      fgNamePrimary: "color-text-primary-light",
      fgPrimaryHex: "#576062",
      fgNameSecondary: "color-text-secondary-light",
      fgSecondaryHex: "#576062",
      description: "highlight colour for neutral UI elements",
    },

    {
      bgName: "color-surface-higher-light",
      bgHex: "#E9F2F5",
      fgNamePrimary: "color-text-primary-light",
      fgPrimaryHex: "#576062",
      fgNameSecondary: "color-text-secondary-light",
      fgSecondaryHex: "#576062",
      description: "darker highlight colour for neutral UI elements",
    },

    {
      bgName: "color-surface-highest-light",
      bgHex: "#71797A",
      fgNamePrimary: "color-text-primary-inverse-light",
      fgPrimaryHex: "#E1E3E3",
      fgNameSecondary: "color-text-secondary-inverse-light",
      fgSecondaryHex: "#EFF1F1",
      description: "used for negative space",
    },

    {
      bgName: "color-surface-inverse-light",
      bgHex: "#444748",
      fgNamePrimary: "color-text-primary-inverse-light",
      fgPrimaryHex: "#E1E3E3",
      fgNameSecondary: "color-text-secondary-inverse-light",
      fgSecondaryHex: "#EFF1F1",
      description: "used for inverse surfaces such as banners and footers",
    },
  ];

  outlineColors = [
    {
      name: "color-outline-low-light",
      hex: "#ECEEEE",
      description: "use for seperators",
    },
    {
      name: "color-outline-default-light",
      hex: "##BFC8CA",
      description: "use for outlined UI elements such as input fields",
    },
    {
      name: "color-outline-high-light",
      hex: "##71797A",
      description: "use to highlight outlined UI elements such as input fields",
    },
  ];
}
