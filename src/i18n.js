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
      },
      user: {
        'Email': 'Email',
        'Log in': 'Log in',
        'Sign up': 'Sign up',
        'Sign up form': 'Sign up form',
        'Password': 'Password',
        'notmember': 'Not a member yet? Go to ',
        'confirmPassword': 'Confirm password',
        'confirmError': 'The passwords do not match!',
        'minPassLength': 'At least 8 characters',
        'fieldsNecessary': 'Fields marked with * are necessary',
        'alreadyRegistered?': 'Already registered? Go to ',
        'name': 'Name',
        'whatName?': 'What is the name of your organization?',
        'field': 'Field*',
        'producer': 'Producer',
        'trader': 'Trader',
        'logistics': 'Logistics',
        'insurance': 'Insurance',
        'other': 'Other',
        'whatField?': 'What is your field of business?',
        'cooperative': 'Cooperative',
        'association': 'Association',
        'private': 'Private',
        'ngo': 'NGO',
        'type': 'Type*',
        'whatType?': 'What is the type of your organization?',
        'address': 'Address',
        'country': 'Country',
        'cityPort': 'Nearest city/port',
        'whatCityPort?': 'If you plan to sell, what is the nearest city or port?',
        'phone': 'Phone number',
        'registration': 'Registration number',
        'cocOptional': 'Chamber of Commerce registration number (optional now)',
        'cocExplanation': 'To participate on this website, you will need to provide proof of your membership of your local chamber of commerce. If you have your registration number ready, please fill it in above. You can also do this after signing up. If you have any questions, please contact the webmaster.',


      },
      orders: {
        'Order': 'Order',
        'Order Volume': 'Order Volume',
        'Comments': 'Comments',
        'Status': 'Status',
        'Ordered date': 'Ordered date',
        'GO TO SELLER PROFILE': 'GO TO SELLER PROFILE',
        'SEE DETAILS': 'SEE DETAILS'
      },
      detail: {
        'Order': 'Order',
        'Organization name': 'Organization name',
        'Field': 'Field',
        'Type': 'Type',
        'COC': 'COC',
        'Address': 'Address',
        'Country': 'Country',
        'Phone': 'Phone',
        'Email': 'Email',
        'ICO': 'ICO',
        'Volume': 'Volume',
        'Comments': 'Comments',
        'ACCEPT': 'ACCEPT',
        'DECLINE': 'DECLINE'
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
      user: {
        'Email': 'Email',
        'Log in': 'Iniciar sesión',
        'Sign up': 'Registrar',
        'Sign up form': 'Crear una cuenta',
        'Password': 'Contraseña',
        'notmember': '¿No tienes una cuenta?',
        'confirmPassword': 'Confirma la contraseña',
        'confirmError': '¡Las contraseñas no coinciden!',
        'minPassLength': 'Al menos 8 carácteres',
        'fieldsNecessary': 'Espacios marcados con * son necesarios',
        'alreadyRegistered?': '¿Ya tienes una cuenta?',
        'name': 'Nombre',
        'whatName?': '¿Cuál es el nombre de su organización?',
        'field': 'Espacio*',
        'producer': 'Productor',
        'trader': 'Vendedor',
        'logistics': 'Logistica',
        'insurance': 'Seguro',
        'other': 'Otros',
        'whatField?': '¿Cuál es su campo de negoción?',
        'cooperative': 'Cooperativa',
        'association': 'Association',
        'private': 'Privada',
        'ngo': 'Organización No Gubernamental ONG',
        'type': 'Tipo*',
        'whatType?': '¿Cuál es su tipo de su organización?',
        'address': 'Dirección',
        'country': 'País',
        'cityPort': 'Puerto o ciudad mas cercana',
        'whatCityPort?': '¿Si su plan es vender, cual es la ciudad o puerto mas cercano?',
        'phone': 'Número de telefono',
        'registration': 'Número de registro',
        'cocOptional': 'Registro de Camara de Comercio (Opcional ahora)',
        'cocExplanation': 'Para participar en este website, ud. necesita proveer el registro de membresía (pertenencia) de su camara de comercio local. Si ud. tiene su número de registro listo, por favor rellenelo (escríbalo) arriba. También puede hacerlo después de registrarse. Si usted tiene algunas preguntas, por favor contacte al administrador de la web.',
      },
      orders: {
        'Order': 'Orden',
        'Order Volume': 'Volumen de pedido',
        'Comments': 'Comentarios',
        'Status': 'Estado',
        'Ordered date': 'Fecha ordenada',
        'GO TO SELLER PROFILE': 'IR AL PERFIL DEL VENDEDOR',
        'SEE DETAILS': 'Ver detalles'
      },
      detail: {
        'Order': 'Orden',
        'Organization name': 'Nombre de la Organización',
        'Field': 'Campo',
        'Type': 'Tipo',
        'COC': 'COC',
        'Address': 'Dirección',
        'Country': 'País',
        'Phone': 'Teléfono',
        'Email': 'Email',
        'ICO': 'ICO',
        'Volume': 'Volumen',
        'Comments': 'Comentarios',
        'ACCEPT': 'ACEPTAR',
        'DECLINE': 'DISMINUCION'
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
