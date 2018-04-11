import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      product: {
        'Code':  'Code',
        'Harvested Dated': 'Harvested Dated',
        'Expiration Date': 'Expiration Date',
        'View Seller': 'View Seller',
        'Volume': 'Volume',
        'Price': 'Price',
        'Certification': 'Certification',
        'Country': 'Country',
        'City/Port': 'City/Port',
        'Edit Product': 'Edit Product',
        'Make An Order': 'Make An Order'
      },
      profile: {
        'Name': 'Name',
      }
    },
    es: {
      product: {
        'Code': 'Código',
        'Harvested Dated': 'Fecha de cosecha',
        'Expiration Date': 'Fecha de vencimiento',
        'View Seller': 'Ver vendedor',
        'Volume': 'Volumen',
        'Price': 'Precio',
        'Certification': 'certificación',
        'Country': 'Estado',
        'City/Port': 'Ciudad',
        'Edit Product': 'Editar producto',
        'Make An Order': 'Hacer un pedido'
      },
      profile: {
        'new': 'nuevo'
      },
      orders: {
        'Order': 'Orden',
        'Order Volume': 'Volumen de pedido',
        'Comments': 'Comentarios',
        'Status': 'Estado',
        'Ordered date': 'Fecha ordenada',
        'GO TO SELLER PROFILE': 'IR AL PERFIL DEL VENDEDOR'
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
