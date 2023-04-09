const i18n = {
    locale: 'cs-CZ',
    // override: {
    //   "cs-CZ": {
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
    //     getStarted: "Přetáhněte pole zprava do tohoto okna",
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
    //   },
    // },
  };

  const disabledAttrs = [
    'access',
    'className',
    'description',
    'inline',
    'other',
    'rows',
    'step',
    'toggle',
  ]

  jQuery(function ($) {
    const trash = document.getElementById("trash");
    const showData = document.getElementById("show-data");
    const saveData = document.getElementById("save-data");
    const preview = document.getElementById("preview");
    const addPageTab = document.getElementById("add-page-tab");

    const pages = $(document.getElementById("form-builder-pages"));
    const loadedInstances = localStorage.getItem("form-data");
    const instances = [];

    pages.tabs({
      beforeActivate: function (event, ui) {
        if (ui.newPanel.selector === "#new-page") {
          return false;
        }
      },
    });

    let loading = false;
    async function addInstance(name, data) {
      loading = true;
      const instance = await $(".fb-editor").formBuilder({
          i18n,
          disabledAttrs,
          showActionButtons: false,
        formData: data ? JSON.stringify(data) : "[]",
        onLoad(props) {
          console.log({ props });
        },
      });
      instance.name = name;

      instances.push(instance);
      return instance;
    }

    function addTab(name, data) {
      const tabCount = document.getElementById("tabs").children.length;
      const defaultName = "Page-" + tabCount
      const tabName =
        name || prompt("Zadejte název stránky:", defaultName);
      const tabId = "page-" + tabCount;
      
      if(!tabName){
        return
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

      $newPageTemplate.parentElement.insertBefore(
        $newPage,
        $newPageTemplate
      );

      $newTabTemplate.parentElement.insertBefore($newTab, $newTabTemplate);

      pages.tabs("refresh");
      pages.tabs("option", "active", tabCount - 1);
      return addInstance(tabName, data);
    }

    async function loadPages() {
      if (!loadedInstances) {
        addTab("Stránka 1");
        return;
      }

      try {
        const parsed = JSON.parse(loadedInstances);
        await Promise.all(
          parsed.map((data) => addTab(data.name, data.components))
        );
      } catch {}

      console.log({ instances });
    }

    loadPages();

    addPageTab.addEventListener(
      "click",
      () => {
        addTab();
      },
      false
    );

    function getCurrentInstance() {
      const currentIndex = pages.tabs("option", "active");
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
    /* TODO
        preview.onclick = function() {
            const formPreviewWindow = window.open('', 'formPreview', 'height=480,width=640,toolbar=no,scrollbars=yes');

            const script = document.createElement('script');
            script.setAttribute('src', 'gpt.js');
            script.setAttribute('type', 'text/javascript');

            const js = document.createElement('script');
            js.setAttribute('type', 'application/json');
            js.innerHTML = JSON.stringify(formBuilder.actions.getData());
            js.id = 'form-data'
            
            formPreviewWindow.document.body.append(js)
            formPreviewWindow.document.body.prepend(script);
            formPreviewWindow.document.dispatchEvent(new Event('load'));
        };
        */
  });