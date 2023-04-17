const i18n = {
  locale: "cs-CZ",
  override: {
    "cs-CZ": {
  //     addOption: "Přidat možnost +",
  //     allFieldsRemoved: "Všechny položky byly odstraněny.",
  //     allowMultipleFiles: "Umožnit uživatelům nahrávat více souborů",
  //     autocomplete: "Autocomplete",
  //     button: "Tlačítko",
  //     cannotBeEmpty: "Toto pole nesmí být prázdné",
  //     checkboxGroup: "Zaškrtávací políčka",
  //     className: "Třídy stylu",
  //     clearAllMessage: "Opravdu chcete smazat všechny položky?",
  //     clear: "Smazat všechno",
  //     close: "Zavřít",
  //     content: "Obsah",
  //     copy: "Kopírovat do schránky",
  //     copyButton: "&#43;",
  //     copyButtonTooltip: "Kopírovat",
  //     dateField: "Vyberte datum",
  //     description: "Nápověda",
  //     descriptionField: "Popis",
  //     devMode: "Režim vývojáře",
  //     editNames: "Upravit jména",
  //     editorTitle: "Prvky formuláře",
  //     editXML: "Upravit XML",
  //     enableOther: "Aktivovat &quot;Ostatní&quot;",
  //     enableOtherMsg: "Umožnit uživatelům zadat neseznamovanou volbu",
  //     fieldNonEditable: "Toto pole nelze upravovat.",
  //     fieldRemoveWarning: "Opravdu chcete odstranit toto pole?",
  //     fileUpload: "Nahrání souboru",
  //     formUpdated: "Formulář aktualizován",
       getStarted: "Přetáhněte pole z menu do tohoto okna",
  //     header: "Hlavička",
  //     hide: "Skrýt",
  //     hidden: "Skrytý vstup",
  //     inline: "Řádkový",
  //     inlineDesc: "Zobrazit {type} řádkově",
  //     label: "Štítek",
  //     labelEmpty: "Štítek pole nemůže být prázdný",
  //     limitRole:
  //       "Omezit přístup na jednu nebo více z následujících rolí:",
  //     mandatory: "Povinné",
  //     maxlength: "Maximální délka",
  //     minOptionMessage: "Toto pole vyžaduje minimálně 2 volby",
  //     multipleFiles: "Více souborů",
  //     name: "Název",
  //     no: "Ne",
  //     noFieldsToClear: "Žádné položky k vymazání",
  //     number: "Číslo",
  //     off: "Vypnuto",
  //     on: "Zapnuto",
  //     option: "Volba",
  //     options: "Handlebars",
  //     optional: "Moznostelní",
  //     optionLabelPlaceholder: "Štítek",
  //     optionValuePlaceholder: "Hodnota",
  //     optionEmpty: "Je požadována hodnota volby",
  //     other: "Jiný",
  //     paragraph: "Odstavec",
  //     placeholder: "Ukázková hodnota",
  //     "placeholder.value": "Hodnota",
  //     "placeholder.label": "Štítek",
  //     "placeholder.text": "",
  //     "placeholder.textarea": "",
  //     "placeholder.email": "Zadejte email",
  //     "placeholder.placeholder": "",
  //     "placeholder.className": "třídy oddělené mezerami",
  //     "placeholder.password": "Zadejte heslo",
  //     preview: "Náhled",
  //     radioGroup: "Skupina kulatých tlačítek",
  //     radio: "Radio",
  //     removeMessage: "Odstranit prvek",
  //     removeOption: "Odstranit možnost",
  //     remove: "&#215;",
  //     required: "Požadované",
  //     richText: "Editor kvalitního textu",
  //     roles: "Přístup",
  //     rows: "Řádky",
  //     save: "Uložit",
  //     selectOptions: "Možnosti",
  //     select: "Rozbalovací menu",
  //     selectColor: "Vybrat barvu",
  //     selectionsMessage: "Umožnit více výběrů",
  //     size: "Velikost",
  //     "size.xs": "Extra malé",
  //     "size.sm": "Malé",
  //     "size.m": "Výchozí",
  //     "size.lg": "Velké",
  //     style: "Styl",
  //     styles: {
  //       btn: {
  //         default: "Výchozí",
  //         danger: "Nebezpečí",
  //         info: "Informace",
  //         primary: "Primární",
  //         success: "Úspěch",
  //         warning: "Varování",
  //       },
  //     },
  //     subtype: "Typ",
  //     text: "Textové pole",
  //     textArea: "Textová oblast",
  //     toggle: "Přepínač",
  //     warning: "Pozor!",
  //     value: "Hodnota",
  //     viewJSON: "{  }",
  //     viewXML: "&lt;/&gt;",
  //     yes: "Ano",
  submit: 'Uložit',
  reset: 'Vyčistit'
    },
  },
};

const disabledAttrs = [
  "access",
  //"className",
  "description",
  //"inline",
  "other",
  "rows",
  "step",
  "toggle",
];

const social_media = {
  type: "select",
  required: true,
  label: "Sociální síť",
  className: "form-control",
  name: "social_media",
  icon: "M",
  multiple: false,
  values: [
    {
      label: "Facebook",
      value: "Facebook",
      selected: true,
    },
    {
      label: "Youtube",
      value: "Youtube",
      selected: false,
    },
    {
      label: "Instagram",
      value: "Instagram",
      selected: false,
    },
    {
      label: "Twitter",
      value: "Instagram",
      selected: false,
    },
  ],
};

const tone = {
  type: "select",
  required: true,
  label: "Tón",
  className: "form-control",
  name: "tone",
  icon: "T",
  multiple: false,
  values: [
    {
      label: "Profesionální",
      value: "Profesionální",
      selected: true,
    },
    {
      label: "Kreativní",
      value: "Kreativní",
      selected: false,
    },
    {
      label: "Naštvaný",
      value: "Naštvaný",
      selected: false,
    },
    {
      label: "Sarkastický",
      value: "Sarkastický",
      selected: false,
    },
    {
      label: "Smutný",
      value: "Smutný",
      selected: false,
    },
  ],
};

const description = {
  required: true,
  label: "Popis",
  type: "textarea",
  icon: "P",
  name: "description",
};

const submitButton = {
  type: "button",
  subtype: "submit",
  label: "Odeslat",
  className: "btn-primary btn",
  name: "submit",
  style: "primary",
  icon: "O",
};

const promptPreset = {
  type: "hidden",
  name: "prompt",
  label: "Příkaz",
  value: "{description}",
  icon: "R",
};

const systemPreset = {
  type: "hidden",
  name: "system",
  label: "Systémová zpráva",
  value: "Jsi profesionální copywriter...",
  icon: "S",
};

const responseSize = {
 label: 'Maximum tokenů',
 type: 'number',
 name: 'max_tokens',
 min: '10',
 max: '2048',
 step: '10',
 value: '1024',
 required: true,
}

const fields = [tone, description, promptPreset, systemPreset, social_media, submitButton, responseSize];
const replaceFields = []; // [description, promptPreset, social_media, submitButton];
const controlOrder = []; // [...replaceFields, ...fields].map((field) => field.type);

const inputSets = [
  {
    label: "Generátor nadpisů",
    name: "header-generator",
    showHeader: true,
    fields: [
      description,
      tone,
      submitButton,
      {
        ...systemPreset,
        value: "Jsi profesionální copywriter",
      },
      {
        ...promptPreset,
        value: "Máš za úkol vytvořit {tone} nadpis k {description}",
      },
    ],
  },

  {
    label: "Generátor příspěvků",
    name: "preview-generator",
    showHeader: true,
    fields: [
      social_media,
      description,
      tone,
      {
        ...systemPreset,
        value: "Jsi profesionální copywriter a skvělý vypravěč.",
      },
      {
        ...promptPreset,
        value: "Máš za úkol vytvořit {tone} příspěvek na sociální síť {social_media}. Více informací: {description}",
      },
      submitButton,
    ],
  },
  
  {
    label: "Marketingová Kampaň - Scannable Content",
    name: "marketing-scannable-content",
    showHeader: true,
    fields: [
      description,
      {
        ...systemPreset,
        value: "Jsi profesionální marketér",
      },
      {
        ...promptPreset,
        value: "Vytvoř návrh marketingové kampaně pomocí metody 'Scannable Content', který vytvoří obsah, který je snadno prohlédnutelný a rychle čitelný pro [description]. Zahrňte jasné nadpisy, odrážky a krátké odstavce, aby byl obsah přehlednější a účinnější. [description]: {description}",
      },
      submitButton,
    ],
  },
];

const hideControls = []
const disableFields = [
  'autocomplete', 
  // 'button',
  'checkbox-group',
  'date',
  'file',
  // 'header',
  'hidden',
  // 'number',
  'paragraph',
  'radio-group',
  // 'select',
  'starRating',
  // 'text',
  // 'textarea',
]
const options = {
  // editOnAdd: true,
  showActionButtons: false,
  controlPosition: "left",
  fieldRemoveWarn: true,
  disableFields,
  stickyControls: {
    enable: true,
    offset: {
      top: 20,
      left: 20,
      right: "auto",
    },
  },
  i18n,
  disabledAttrs,
  fields,
  controlOrder,
  inputSets,
  hideControls,
  replaceFields,
};

jQuery(function ($) {
  const trash = document.getElementById("trash");
  const showData = document.getElementById("show-data");
  const saveData = document.getElementById("save-data");
  const addPageTab = document.getElementById("add-page-tab");

  const pages = $(document.getElementById("form-builder-pages"));
  const loadedInstances = localStorage.getItem("form-data");
  const instances = [];
  const withTabs = false;


  let loading = false;
  async function addInstance(name, data) {
    loading = true;
    const instance = await $(".fb-editor").formBuilder({
      ...options,
      formData: data ? JSON.stringify(data) : "[]",
    });
    instance.name = name;

    instances.push(instance);
    return instance;
  }

  function addTab(name, data) {
    if(!withTabs){
        return addInstance(name, data)
    }

    const tabCount = document.getElementById("tabs").children.length;
    const defaultName = "Page-" + tabCount;
    const tabName = name || prompt("Zadejte název stránky:", defaultName);
    const tabId = "page-" + tabCount;

    if (!tabName) {
      return;
    }

    const $newPageTemplate = document.getElementById("new-page");
    const $newTabTemplate = document.getElementById("add-page-tab");
    const $newPage = $newPageTemplate.cloneNode(true);

    $newPage.setAttribute("id", tabId);
    $newPage.classList.add("fb-editor");

    const $newTab = $newTabTemplate.cloneNode(true);
    $newTab.removeAttribute("id");
    const $tabLink = $newTab.querySelector("a");

    $tabLink.setAttribute("href", "#" + tabId);
    $tabLink.innerText = tabName;

    $newPageTemplate.parentElement.insertBefore($newPage, $newPageTemplate);

    $newTabTemplate.parentElement.insertBefore($newTab, $newTabTemplate);

    pages.tabs("refresh");
    pages.tabs("option", "active", tabCount - 1);

    return addInstance(tabName, data);
  }

  async function loadPages() {
    console.log({ loadedInstances });
    if (!loadedInstances) {
      addTab("Stránka 1");
      return;
    }

    try {
      const parsed = JSON.parse(loadedInstances);
      console.log(parsed)
      await Promise.all(
        parsed.map((data) => addTab(data.name, data.components))
      );
    } catch {}

    console.log({ instances });
  }

  loadPages();

  if (withTabs) {
    pages.tabs({
      beforeActivate: function (event, ui) {
        if (ui.newPanel.selector === "#new-page") {
          return false;
        }
      },
    });

    addPageTab.addEventListener(
      "click",
      () => {
        addTab();
      },
      false
    );
  }

  function getCurrentInstance() {
    const currentIndex = withTabs  ? pages.tabs("option", "active") : 0;
    return instances[currentIndex];
  }

  showData.onclick = function () {
    getCurrentInstance().actions.showData();
  };

  trash.onclick = function () {
    getCurrentInstance().actions.clearFields();
  };

  saveData.onclick = function () {
    const data = instances.map((instance) => {
      return {
        components: instance.actions.save(),
        name: instance.name,
      };
    });

    localStorage.setItem("form-data", JSON.stringify(data));
  };
});
