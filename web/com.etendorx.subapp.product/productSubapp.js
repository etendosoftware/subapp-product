Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var etendoUiLibrary = require('etendo-ui-library');
var i18n = require('i18n-js');
var dateFns = require('date-fns');
var reactNativeVisionCamera = require('react-native-vision-camera');
var visionCameraCodeScanner = require('vision-camera-code-scanner');
var stack = require('@react-navigation/stack');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// Colors
var PRIMARY_100 = '#202452';

var styles$5 = reactNative.StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_100,
    },
});

var Home$2={welcome:"Bienvenido a Etendo",productList:"Lista de productos",newProduct:"Añadir nuevo producto",typeProduct:"Buscador de productos",searchBarcode:"Escanear"};var ProductDetail$2={welcome:"Bienvenido a Etendo",newProduct:"Añade un nuevo producto",editProduct:"Editar producto",products:"Productos",productExample:"Ej. Lata de atún",barcode:"Código de barras",barcodePlaceholder:"Escribe o escanea el código"};var Table$2={products:"Productos",barcode:"Código de Barras",barcodeShort:"Cód. Barras",actions:"Acciones"};var Modal$2={messageDelete:"Esta seguro de eliminar el producto?"};var Common$1={save:"Guardar",cancel:"Cancelar",accept:"Aceptar",goBack:"Volver"};var ES = {Home:Home$2,ProductDetail:ProductDetail$2,Table:Table$2,Modal:Modal$2,Common:Common$1};

var Home$1={welcome:"Welcome To Etendo",productList:"Product list",newProduct:"Add new product",typeProduct:"Product finder",searchBarcode:"Scan"};var ProductDetail$1={welcome:"Bienvenido a Etendo",newProduct:"Add new product",editProduct:"Edit product",products:"Products",productExample:"Eg. tuna can",barcode:"Barcode",barcodePlaceholder:"Type or scan the code"};var Table$1={products:"Products",barcode:"Barcode",barcodeShort:"Barcode",actions:"Actions"};var Modal$1={messageDelete:"Are you sure to remove the product?"};var Common={save:"Save",cancel:"Cancel",accept:"Accept",goBack:"Go back"};var EN = {Home:Home$1,ProductDetail:ProductDetail$1,Table:Table$1,Modal:Modal$1,Common:Common};

var supportedLocales = {
    'en-US': EN,
    'es-ES': ES,
};
var Localization = {
    locale: 'en-US',
};
var fallbackLanguage = 'en-US';
var fallbackDateLocale = dateFns.enUS;
var dateLocales = { enUS: dateFns.enUS, esES: dateFns.esES };
var locale = {
    currentDateLocale: null,
    i18n: i18n__default["default"],
    init: function () {
        i18n__default["default"].locale = 'en-US';
        i18n__default["default"].fallbacks = true;
        i18n__default["default"].defaultLocale = fallbackLanguage;
        i18n__default["default"].translations = supportedLocales;
        if (supportedLocales[Localization.locale]) {
            i18n__default["default"].translations[Localization.locale] =
                supportedLocales[Localization.locale];
            this.currentDateLocale =
                dateLocales[Localization.locale.replace('-', '')] || null;
        }
        else {
            i18n__default["default"].translations[fallbackLanguage] = supportedLocales[fallbackLanguage];
            this.currentDateLocale = fallbackDateLocale;
        }
    },
    t: function (key, params) {
        return i18n__default["default"].t(key, params);
    },
    setCurrentLanguage: function (input) {
        var newLocal = input.replace('_', '-');
        i18n__default["default"].locale = newLocal;
        i18n__default["default"].translations = {};
        if (supportedLocales[newLocal]) {
            i18n__default["default"].translations[newLocal] = supportedLocales[newLocal];
        }
    },
    formatDate: function (date, formatStr) {
        try {
            return dateFns.format(date, formatStr, { locale: this.getDeviceLocaleForDate() });
        }
        catch (error) {
            throw new Error("".concat(error.message, " - Params: Date: ").concat(date, " - Format String: ").concat(formatStr));
        }
    },
    parseISODate: function (date) {
        return dateFns.parseISO(date);
    },
    getDeviceLocale: function () {
        if (supportedLocales[Localization.locale]) {
            return i18n__default["default"].locale;
        }
        else {
            return fallbackLanguage;
        }
    },
    getDeviceLocaleForDate: function () {
        return this.currentDateLocale || fallbackDateLocale;
    },
    formatLanguageUnderscore: function (language, dash) {
        switch (language) {
            case 'en':
            case 'en-US':
            case 'en_US':
                return dash ? 'en-US' : 'en_US';
            case 'es':
            case 'es-ES':
            case 'es_ES':
                return dash ? 'es-ES' : 'es_ES';
            default:
                return dash ? 'en-US' : 'en_US';
        }
    },
    getLanguageName: function (language) {
        var formattedLanguage = this.formatLanguageUnderscore(language, true);
        return supportedLocales[formattedLanguage] ? formattedLanguage : null;
    },
    languageByDefault: function () {
        return this.formatLanguageUnderscore('', true);
    },
};

// getting screen width and height
var width = reactNative.Dimensions.get('screen').width;
var height = reactNative.Dimensions.get('screen').height;
var isTabletDevice = function () {
    var pixelDensity = reactNative.PixelRatio.get();
    var adjustedWidth = width * pixelDensity;
    var adjustedHeight = height * pixelDensity;
    if (pixelDensity < 1.6 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    }
    else {
        return (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920));
    }
};
var isTablet = isTabletDevice();

var generalStyles = reactNative.StyleSheet.create({
    buttonContainer: {
        width: isTablet ? '30%' : '100%',
    },
    icon: {
        height: 15,
    },
    full: {
        width: '100%',
        height: '100%',
    },
    centerColumn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topSection: {
        display: 'flex',
        flexDirection: isTablet ? 'row' : 'column',
        justifyContent: isTablet ? 'space-between' : 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: isTablet ? 35 : 24,
        marginVertical: 24,
    },
});

var Navbar = function (_a) {
    var username = _a.username, title = _a.title, onOptionSelected = _a.onOptionSelected;
    return (React__default["default"].createElement(reactNative.SafeAreaView, { style: styles$5.container },
        React__default["default"].createElement(etendoUiLibrary.Navbar, { title: title, name: username, profileOptions: onOptionSelected && !isTablet
                ? [
                    {
                        title: locale.t('Common.goBack'),
                        image: React__default["default"].createElement(etendoUiLibrary.BackIcon, null),
                        route: 'Home',
                    },
                ]
                : undefined, onOptionSelectedProfile: onOptionSelected, navbarComponents: [
                {
                    component: (React__default["default"].createElement(etendoUiLibrary.Button, { typeStyle: "primary", iconLeft: React__default["default"].createElement(etendoUiLibrary.BackIcon, { style: generalStyles.icon }), paddingVertical: 16, width: 120, onPress: function () { return onOptionSelected && onOptionSelected('Home'); }, text: locale.t('Common.goBack') })),
                    inOptions: { title: locale.t('Common.goBack') },
                },
            ] })));
};

var styles$4 = reactNative.StyleSheet.create(__assign(__assign({}, generalStyles), { container: {
        display: 'flex',
        flexDirection: isTablet ? 'row' : 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: isTablet ? 32 : 24,
        gap: 12,
        width: isTablet ? '65%' : '88%',
    }, searchInput: {
        width: isTablet ? '50%' : '100%',
        marginBottom: isTablet ? 0 : 6,
        marginRight: isTablet ? 12 : 0,
    } }));

var CAMERA_STATUS = 'authorized';
var SIDE_CAMERA = 'back';
var CameraBarCode = function (_a) {
    var ableToRead = _a.ableToRead, handleReadCode = _a.handleReadCode;
    var _b = React.useState(false), cameraPermission = _b[0], setCameraPermission = _b[1];
    var _c = React.useState(null), deviceSelected = _c[0], setDevicesSelected = _c[1];
    var _d = React.useState(true), isReading = _d[0], setIsReading = _d[1];
    var handleCameraPermission = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, reactNativeVisionCamera.Camera.requestCameraPermission()];
                case 1:
                    _a.sent();
                    setCameraPermission(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var _e = visionCameraCodeScanner.useScanBarcodes([visionCameraCodeScanner.BarcodeFormat.ALL_FORMATS], { checkInverted: true }), frameProcessor = _e[0], barcodes = _e[1];
    React.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var cameraPermissions, devicesAvailable, backCamera, algo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, reactNativeVisionCamera.Camera.getCameraPermissionStatus()];
                    case 1:
                        cameraPermissions = _a.sent();
                        setCameraPermission(cameraPermissions == CAMERA_STATUS);
                        return [4 /*yield*/, reactNativeVisionCamera.Camera.getAvailableCameraDevices()];
                    case 2:
                        devicesAvailable = _a.sent();
                        backCamera = devicesAvailable.filter(function (item) { return item.position == SIDE_CAMERA; });
                        algo = backCamera.length
                            ? backCamera.shift()
                            : null;
                        setDevicesSelected(algo);
                        return [2 /*return*/];
                }
            });
        }); })();
        handleCameraPermission();
    }, []);
    React.useEffect(function () {
        if (ableToRead) {
            handleBarcode();
        }
    }, [ableToRead, barcodes]);
    var handleBarcode = function () {
        var _a;
        if (barcodes.length) {
            var code = (_a = barcodes.shift()) === null || _a === void 0 ? void 0 : _a.displayValue;
            setIsReading(false);
            handleReadCode(code);
        }
    };
    return isReading && deviceSelected && cameraPermission ? (React__default["default"].createElement(reactNativeVisionCamera.Camera, { style: reactNative.StyleSheet.absoluteFill, device: deviceSelected, isActive: isReading, frameProcessor: frameProcessor, frameProcessorFps: 5 })) : null;
};

var Camera = function (_a) {
    var show = _a.show, setShow = _a.setShow, handleReadCode = _a.handleReadCode;
    return show ? (React__default["default"].createElement(reactNative.Modal, { animationType: "slide", transparent: true, visible: show },
        React__default["default"].createElement(reactNative.View, { style: {
                height: '100%',
                width: '100%',
                backgroundColor: 'transparent',
                zIndex: -1,
                position: 'relative',
            } },
            React__default["default"].createElement(CameraBarCode, { ableToRead: show, handleReadCode: handleReadCode })),
        React__default["default"].createElement(reactNative.View, { style: [
                generalStyles.buttonContainer,
                {
                    position: 'absolute',
                    bottom: 30,
                    width: isTablet ? '20%' : '60%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignSelf: 'center',
                },
            ] },
            React__default["default"].createElement(etendoUiLibrary.Button, { width: "100%", height: 50, typeStyle: "primary", onPress: function () {
                    setShow(false);
                }, text: locale.t('Common.cancel'), iconLeft: React__default["default"].createElement(etendoUiLibrary.CancelIcon, { style: generalStyles.icon }) })))) : (React__default["default"].createElement(React__default["default"].Fragment, null));
};

var Search = function () {
    var _a = React__default["default"].useState(''), barcode = _a[0], setBarcode = _a[1];
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    var handleReadCode = function (code) {
        if (code) {
            setBarcode(code);
            setShow(false);
        }
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Camera, { show: show, setShow: setShow, handleReadCode: handleReadCode }),
        React__default["default"].createElement(reactNative.View, { style: styles$4.container },
            React__default["default"].createElement(reactNative.View, { style: styles$4.searchInput },
                React__default["default"].createElement(etendoUiLibrary.Input, { value: barcode, onChangeText: function (value) {
                        return setBarcode(value);
                    }, placeholder: locale.t('Home.typeProduct'), typeField: "textInputSearch", height: 50 })),
            React__default["default"].createElement(reactNative.View, { style: [styles$4.buttonContainer] },
                React__default["default"].createElement(etendoUiLibrary.Button, { width: isTablet ? '70%' : '100%', height: 50, typeStyle: "terciary", iconLeft: React__default["default"].createElement(etendoUiLibrary.CameraIcon, { style: styles$4.icon }), onPress: function () {
                        setShow(true);
                    }, text: locale.t('Home.searchBarcode') })))));
};

var styles$3 = reactNative.StyleSheet.create(__assign(__assign({}, generalStyles), { table: {
        display: 'flex',
        alignItems: 'center',
        margin: isTablet ? 32 : 24,
        height: '55%',
    }, icon: {
        height: isTablet ? 25 : 20,
    } }));

var styles$2 = reactNative.StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
    },
    modalContent: {
        width: isTablet ? '30%' : '80%',
        height: isTablet ? '35%' : '25%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    modalText: {
        fontSize: 29,
        fontWeight: '600',
        textAlign: 'center',
        color: PRIMARY_100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonModalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        width: isTablet ? '40%' : '45%',
    },
});

var Modal = function (_a) {
    var textModal = _a.textModal, textConfirm = _a.textConfirm, visible = _a.visible, textCancel = _a.textCancel, setVisible = _a.setVisible, functionConfirm = _a.functionConfirm, functionCancel = _a.functionCancel;
    return (React__default["default"].createElement(reactNative.Modal, { animationType: "fade", transparent: true, visible: visible, onRequestClose: setVisible },
        React__default["default"].createElement(reactNative.View, { style: styles$2.modalContainer },
            React__default["default"].createElement(reactNative.View, { style: styles$2.modalContent },
                React__default["default"].createElement(reactNative.View, null,
                    React__default["default"].createElement(reactNative.Text, { style: styles$2.modalText }, textModal)),
                React__default["default"].createElement(reactNative.View, { style: styles$2.buttonModalContainer },
                    React__default["default"].createElement(reactNative.View, { style: [styles$2.buttonContainer] },
                        React__default["default"].createElement(etendoUiLibrary.Button, { width: "100%", height: 50, typeStyle: "whiteBorder", onPress: function () {
                                functionCancel();
                            }, text: textCancel, iconLeft: React__default["default"].createElement(etendoUiLibrary.CancelIcon, { style: generalStyles.icon }) })),
                    React__default["default"].createElement(reactNative.View, { style: [styles$2.buttonContainer] },
                        React__default["default"].createElement(etendoUiLibrary.Button, { width: "100%", height: 50, typeStyle: "secondary", onPress: function () {
                                functionConfirm();
                            }, text: textConfirm, iconLeft: React__default["default"].createElement(etendoUiLibrary.CheckIcon, { style: generalStyles.icon }) })))))));
};

var IconTouchable = function (_a) {
    var action = _a.action;
    var icon;
    switch (action) {
        case 'edit':
            icon = React__default["default"].createElement(etendoUiLibrary.PencilIcon, { style: styles$3.icon });
            break;
        case 'cancel':
            icon = React__default["default"].createElement(etendoUiLibrary.CancelIcon, { style: styles$3.icon });
            break;
        case 'delete':
            icon = React__default["default"].createElement(etendoUiLibrary.TrashIcon, { style: styles$3.icon });
            break;
        case 'check':
            icon = React__default["default"].createElement(etendoUiLibrary.CheckIcon, { style: styles$3.icon });
            break;
        default:
            icon = React__default["default"].createElement(etendoUiLibrary.CheckIcon, { style: styles$3.icon });
            break;
    }
    return (React__default["default"].createElement(reactNative.View, { style: {
            display: 'flex',
            flexDirection: isTablet ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1,
            marginRight: isTablet ? '10%' : '5%',
        } }, icon));
};
var Table = function (_a) {
    var navigation = _a.navigation;
    var _b = React.useState(false), modalActive = _b[0], setModalActive = _b[1];
    var dataTable = [
        {
            _id: '637289556475c964f56cf7b6',
            name: 'Gel Facial Nivea Exfoliante Aloe Vera 75ml',
            barcode: '4005808940001',
        },
        {
            _id: '637289556475c964f56cfasa6',
            name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
            barcode: '4005808940002',
        },
        {
            _id: '637289556475c964f56cf7b7',
            name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
            barcode: '4005808940003',
        },
        {
            _id: '637289556475c964f56cfasa6',
            name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
            barcode: '4005808940002',
        },
        {
            _id: '637289556475c964f56cf7b7',
            name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
            barcode: '4005808940003',
        },
        {
            _id: '637289556475c964f56cfasa6',
            name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
            barcode: '4005808940002',
        },
        {
            _id: '637289556475c964f56cf7b7',
            name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
            barcode: '4005808940003',
        },
        {
            _id: '637289556475c964f56cfasa6',
            name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
            barcode: '4005808940002',
        },
        {
            _id: '637289556475c964f56cf7b7',
            name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
            barcode: '4005808940003',
        },
    ];
    var dataColumns = [
        {
            key: '_id',
            primary: true,
            visible: false,
        },
        {
            key: 'name',
            label: locale.t('Table.products'),
            visible: true,
            width: '50%',
        },
        {
            key: 'barcode',
            label: isTablet
                ? locale.t('Table.barcode')
                : locale.t('Table.barcodeShort'),
            visible: true,
            width: '25%',
        },
        {
            key: 'actions',
            label: isTablet ? locale.t('Table.actions') : '',
            visible: true,
            width: '25%',
            cellStyle: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            },
            actions: [
                {
                    component: React__default["default"].createElement(IconTouchable, { action: "edit" }),
                    onAction: function (item) {
                        console.log('item1', item);
                        var itemSelected = dataTable.find(function (itemData) { return itemData._id === item; });
                        if (!itemSelected) {
                            return;
                        }
                        var productItem = {
                            _id: item,
                            name: itemSelected.name,
                            barcode: itemSelected.barcode,
                        };
                        navigation.navigate('ProductDetail', { productItem: productItem });
                    },
                },
                {
                    component: React__default["default"].createElement(IconTouchable, { action: "delete" }),
                    onAction: function (item) {
                        console.log('item2', item);
                        setModalActive(true);
                    },
                },
            ],
        },
    ];
    var closeModal = function () {
        setModalActive(false);
    };
    return (React__default["default"].createElement(reactNative.View, { style: styles$3.table },
        React__default["default"].createElement(etendoUiLibrary.Table, { columns: dataColumns, data: dataTable, tableHeight: '100%', onRowPress: function (algo) {
                console.log('algo', algo);
            } }),
        modalActive && (React__default["default"].createElement(Modal, { textModal: locale.t('Modal.messageDelete'), textConfirm: locale.t('Common.accept'), textCancel: locale.t('Common.cancel'), visible: modalActive, setVisible: closeModal, functionConfirm: closeModal, functionCancel: closeModal }))));
};

var styles$1 = reactNative.StyleSheet.create(__assign(__assign({}, generalStyles), { container: {
        width: '100%',
        display: 'flex',
    }, title: {
        fontSize: 29,
        fontWeight: '600',
        textAlign: 'left',
        marginBottom: 6,
        color: PRIMARY_100,
    }, topView: {
        display: 'flex',
        flexDirection: isTablet ? 'row' : 'column',
        justifyContent: isTablet ? 'space-between' : 'flex-start',
        alignItems: 'flex-start',
        margin: isTablet ? 32 : 24,
        gap: 12,
    }, text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#202452',
    }, button: {
        backgroundColor: '#202452',
        padding: 10,
        marginTop: 15,
        borderRadius: 8,
    }, textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    } }));

var Home = function (_a) {
    var navigation = _a.navigation, route = _a.route, navigationContainer = _a.navigationContainer;
    var dataUser = route.params.dataUser;
    return (React__default["default"].createElement(reactNative.View, { style: styles$1.container },
        React__default["default"].createElement(Navbar, { title: locale.t('Home.welcome'), username: dataUser === null || dataUser === void 0 ? void 0 : dataUser.username, onOptionSelected: function () {
                navigationContainer.navigate('Home');
            } }),
        React__default["default"].createElement(reactNative.View, { style: styles$1.topView },
            React__default["default"].createElement(reactNative.Text, { style: styles$1.title }, locale.t('Home.productList')),
            React__default["default"].createElement(reactNative.View, { style: styles$1.buttonContainer },
                React__default["default"].createElement(etendoUiLibrary.Button, { width: isTablet ? '100%' : '60%', height: 50, typeStyle: "secondary", onPress: function () {
                        navigation.navigate('ProductDetail');
                    }, text: locale.t('Home.newProduct'), iconLeft: React__default["default"].createElement(etendoUiLibrary.MoreIcon, { style: styles$1.icon }) }))),
        React__default["default"].createElement(Search, null),
        React__default["default"].createElement(Table, { navigation: navigation })));
};

var styles = reactNative.StyleSheet.create(__assign(__assign({}, generalStyles), { container: {
        width: '100%',
        display: 'flex',
        flex: 1,
    }, title: {
        fontSize: 29,
        fontWeight: '600',
        textAlign: 'left',
        color: PRIMARY_100,
    }, buttonContainer: {
        width: isTablet ? '40%' : '60%',
        margin: 6,
    }, inputSection: {
        display: 'flex',
        flexDirection: isTablet ? 'row' : 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: isTablet ? 35 : 24,
    }, buttonSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: isTablet ? 'flex-end' : 'center',
        alignItems: 'center',
        gap: 12,
        marginHorizontal: isTablet ? 0 : 32,
        width: isTablet ? '40%' : '75%',
    } }));

var ProductDetail = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = React.useState(''), product = _b[0], setProduct = _b[1];
    var _c = React.useState(''), barcode = _c[0], setBarcode = _c[1];
    var _d = React.useState(''), title = _d[0], setTitle = _d[1];
    var _e = React.useState(false), show = _e[0], setShow = _e[1];
    var _f = route.params, dataUser = _f.dataUser, productItem = _f.productItem;
    React.useEffect(function () {
        if (productItem) {
            setProduct(productItem.name);
            setBarcode(productItem.barcode);
            setTitle(locale.t('ProductDetail.editProduct'));
        }
        else {
            setTitle(locale.t('ProductDetail.newProduct'));
        }
    }, []);
    var handleReadCode = function (code) {
        if (code) {
            setBarcode(code);
            setShow(false);
        }
    };
    var handleCancel = function () {
        setProduct('');
        setBarcode('');
        setShow(false);
        navigation.goBack();
    };
    var handleSave = function () {
        // TODO: add logic to save product
        navigation.goBack();
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Camera, { show: show, setShow: setShow, handleReadCode: handleReadCode }),
        React__default["default"].createElement(reactNative.View, { style: styles.container },
            React__default["default"].createElement(Navbar, { title: 'ProductDetail.welcome', username: dataUser === null || dataUser === void 0 ? void 0 : dataUser.username, onOptionSelected: function (route) {
                    navigation === null || navigation === void 0 ? void 0 : navigation.navigate(route);
                } }),
            React__default["default"].createElement(reactNative.View, { style: styles.topSection },
                React__default["default"].createElement(reactNative.View, { style: {
                        width: isTablet ? '50%' : '100%',
                    } },
                    React__default["default"].createElement(reactNative.Text, { style: styles.title }, title)),
                React__default["default"].createElement(reactNative.View, { style: [styles.buttonSection] },
                    React__default["default"].createElement(reactNative.View, { style: styles.buttonContainer },
                        React__default["default"].createElement(etendoUiLibrary.Button, { width: "100%", height: 50, typeStyle: "whiteBorder", onPress: function () {
                                handleCancel();
                            }, text: locale.t('Common.cancel'), iconLeft: React__default["default"].createElement(etendoUiLibrary.CancelIcon, { style: styles.icon }) })),
                    React__default["default"].createElement(reactNative.View, { style: styles.buttonContainer },
                        React__default["default"].createElement(etendoUiLibrary.Button, { width: "100%", height: 50, typeStyle: "secondary", onPress: function () {
                                handleSave();
                            }, text: locale.t('Common.save'), iconLeft: React__default["default"].createElement(etendoUiLibrary.CheckIcon, { style: styles.icon }) })))),
            React__default["default"].createElement(reactNative.View, { style: [styles.inputSection] },
                React__default["default"].createElement(reactNative.View, { style: {
                        width: isTablet ? '55%' : '100%',
                        marginRight: isTablet ? 28 : 0,
                    } },
                    React__default["default"].createElement(etendoUiLibrary.Input, { backgroundColor: "", helperText: "", maxLength: 100, height: 50, placeholder: locale.t('ProductDetail.productExample'), titleLabel: locale.t('ProductDetail.products'), typeField: "textInput", value: product, onChangeText: function (value) {
                            return setProduct(value);
                        } })),
                React__default["default"].createElement(reactNative.View, { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        width: isTablet ? '42%' : '100%',
                    } },
                    React__default["default"].createElement(reactNative.View, { style: {
                            width: isTablet ? '88%' : '80%',
                        } },
                        React__default["default"].createElement(etendoUiLibrary.Input, { backgroundColor: "", helperText: "", maxLength: 100, height: 50, placeholder: locale.t('ProductDetail.barcodePlaceholder'), titleLabel: locale.t('ProductDetail.barcode'), typeField: "textInput", value: barcode, onChangeText: function (value) {
                                return setBarcode(value);
                            } })),
                    React__default["default"].createElement(reactNative.View, { style: {
                            marginBottom: 5,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignContent: 'center',
                        } },
                        React__default["default"].createElement(etendoUiLibrary.Button, { height: 50, width: 50, typeStyle: "terciary", onPress: function () {
                                setShow(true);
                            }, text: "", iconLeft: React__default["default"].createElement(etendoUiLibrary.CameraIcon, { style: styles.icon }) })))))));
};

var App = function (_a) {
    var language = _a.language, navigationContainer = _a.navigationContainer, dataUser = _a.dataUser;
    var Stack = stack.createStackNavigator();
    locale.init();
    locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));
    return (React__default["default"].createElement(Stack.Navigator, { initialRouteName: "Home" },
        React__default["default"].createElement(Stack.Screen, { options: { headerShown: false }, name: "Home", initialParams: { dataUser: dataUser } }, function (props) { return React__default["default"].createElement(Home, __assign({}, props, { navigationContainer: navigationContainer })); }),
        React__default["default"].createElement(Stack.Screen, { options: { headerShown: false }, name: "ProductDetail", initialParams: { dataUser: dataUser } }, function (props) { return React__default["default"].createElement(ProductDetail, __assign({}, props)); })));
};

exports.App = App;
exports["default"] = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN1YmFwcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vcmVzb3VyY2VzL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9zcmMvc3R5bGVzL2NvbG9ycy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9zdHlsZS50cyIsIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vbG9jYWxlLnRzIiwiLi4vLi4vc3JjL3V0aWxzL2luZGV4LnRzIiwiLi4vLi4vc3R5bGVzLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL2luZGV4LnRzeCIsIi4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9zdHlsZS50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2NhbWVyYUJhckNvZGUvaW5kZXgudHN4IiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvY2FtZXJhL2luZGV4LnRzeCIsIi4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9pbmRleC50c3giLCIuLi8uLi9zcmMvY29tcG9uZW50cy90YWJsZS9zdHlsZS50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsL3N0eWxlLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgudHN4IiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFibGUvaW5kZXgudHN4IiwiLi4vLi4vc3JjL3NjcmVlbnMvaG9tZS9zdHlsZS50cyIsIi4uLy4uL3NyYy9zY3JlZW5zL2hvbWUvaW5kZXgudHN4IiwiLi4vLi4vc3JjL3NjcmVlbnMvcHJvZHVjdERldGFpbC9zdHlsZS50cyIsIi4uLy4uL3NyYy9zY3JlZW5zL3Byb2R1Y3REZXRhaWwvaW5kZXgudHN4IiwiLi4vLi4vQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xyXG4gICAgICAgIHZhciBkaXNwb3NlO1xyXG4gICAgICAgIGlmIChhc3luYykge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXN5bmMpIHtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcclxuICAgIGZ1bmN0aW9uIGZhaWwoZSkge1xyXG4gICAgICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcclxuICAgICAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGZhaWwoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgX19leHRlbmRzOiBfX2V4dGVuZHMsXHJcbiAgICBfX2Fzc2lnbjogX19hc3NpZ24sXHJcbiAgICBfX3Jlc3Q6IF9fcmVzdCxcclxuICAgIF9fZGVjb3JhdGU6IF9fZGVjb3JhdGUsXHJcbiAgICBfX3BhcmFtOiBfX3BhcmFtLFxyXG4gICAgX19tZXRhZGF0YTogX19tZXRhZGF0YSxcclxuICAgIF9fYXdhaXRlcjogX19hd2FpdGVyLFxyXG4gICAgX19nZW5lcmF0b3I6IF9fZ2VuZXJhdG9yLFxyXG4gICAgX19jcmVhdGVCaW5kaW5nOiBfX2NyZWF0ZUJpbmRpbmcsXHJcbiAgICBfX2V4cG9ydFN0YXI6IF9fZXhwb3J0U3RhcixcclxuICAgIF9fdmFsdWVzOiBfX3ZhbHVlcyxcclxuICAgIF9fcmVhZDogX19yZWFkLFxyXG4gICAgX19zcHJlYWQ6IF9fc3ByZWFkLFxyXG4gICAgX19zcHJlYWRBcnJheXM6IF9fc3ByZWFkQXJyYXlzLFxyXG4gICAgX19zcHJlYWRBcnJheTogX19zcHJlYWRBcnJheSxcclxuICAgIF9fYXdhaXQ6IF9fYXdhaXQsXHJcbiAgICBfX2FzeW5jR2VuZXJhdG9yOiBfX2FzeW5jR2VuZXJhdG9yLFxyXG4gICAgX19hc3luY0RlbGVnYXRvcjogX19hc3luY0RlbGVnYXRvcixcclxuICAgIF9fYXN5bmNWYWx1ZXM6IF9fYXN5bmNWYWx1ZXMsXHJcbiAgICBfX21ha2VUZW1wbGF0ZU9iamVjdDogX19tYWtlVGVtcGxhdGVPYmplY3QsXHJcbiAgICBfX2ltcG9ydFN0YXI6IF9faW1wb3J0U3RhcixcclxuICAgIF9faW1wb3J0RGVmYXVsdDogX19pbXBvcnREZWZhdWx0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW46IF9fY2xhc3NQcml2YXRlRmllbGRJbixcclxuICAgIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlOiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcclxuICAgIF9fZGlzcG9zZVJlc291cmNlczogX19kaXNwb3NlUmVzb3VyY2VzLFxyXG59O1xyXG4iLCIvLyBDb2xvcnNcbmV4cG9ydCBjb25zdCBQUklNQVJZXzEwMCA9ICcjMjAyNDUyJztcbiIsImltcG9ydCB7U3R5bGVTaGVldH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7UFJJTUFSWV8xMDB9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBSSU1BUllfMTAwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgaTE4biBmcm9tICdpMThuLWpzJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7ZW5VUywgZXNFUywgZm9ybWF0LCBwYXJzZUlTTywgTG9jYWxlfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCBFUyBmcm9tICcuLi9sYW5nL2VzRVMuanNvbic7XG5pbXBvcnQgRU4gZnJvbSAnLi4vbGFuZy9lblVTLmpzb24nO1xuXG5pbnRlcmZhY2UgVHJhbnNsYXRpb25zIHtcbiAgW2tleTogc3RyaW5nXTogdHlwZW9mIEVOIHwgdHlwZW9mIEVTO1xufVxuXG5pbnRlcmZhY2UgTG9jYWxlTW9kdWxlIHtcbiAgY3VycmVudERhdGVMb2NhbGU6IExvY2FsZSB8IG51bGw7XG4gIGkxOG46IHR5cGVvZiBpMThuO1xuICBpbml0OiAoKSA9PiB2b2lkO1xuICB0OiAoa2V5OiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiBzdHJpbmc7XG4gIHNldEN1cnJlbnRMYW5ndWFnZTogKGlucHV0OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGZvcm1hdERhdGU6IChkYXRlOiBEYXRlIHwgbnVtYmVyLCBmb3JtYXRTdHI6IHN0cmluZykgPT4gc3RyaW5nO1xuICBwYXJzZUlTT0RhdGU6IChkYXRlOiBzdHJpbmcpID0+IERhdGU7XG4gIGdldERldmljZUxvY2FsZTogKCkgPT4gc3RyaW5nO1xuICBnZXREZXZpY2VMb2NhbGVGb3JEYXRlOiAoKSA9PiBMb2NhbGU7XG4gIGZvcm1hdExhbmd1YWdlVW5kZXJzY29yZTogKGxhbmd1YWdlOiBzdHJpbmcsIGRhc2g/OiBib29sZWFuKSA9PiBzdHJpbmc7XG4gIGdldExhbmd1YWdlTmFtZTogKGxhbmd1YWdlOiBzdHJpbmcpID0+IHN0cmluZyB8IG51bGw7XG4gIGxhbmd1YWdlQnlEZWZhdWx0OiAoKSA9PiBzdHJpbmc7XG59XG5cbmNvbnN0IHN1cHBvcnRlZExvY2FsZXM6IFRyYW5zbGF0aW9ucyA9IHtcbiAgJ2VuLVVTJzogRU4sXG4gICdlcy1FUyc6IEVTLFxufTtcblxuY29uc3QgTG9jYWxpemF0aW9uID0ge1xuICBsb2NhbGU6ICdlbi1VUycsXG59O1xuXG5jb25zdCBmYWxsYmFja0xhbmd1YWdlID0gJ2VuLVVTJztcbmNvbnN0IGZhbGxiYWNrRGF0ZUxvY2FsZSA9IGVuVVM7XG5jb25zdCBkYXRlTG9jYWxlczogUmVjb3JkPHN0cmluZywgTG9jYWxlPiA9IHtlblVTLCBlc0VTfTtcblxuY29uc3QgbG9jYWxlOiBMb2NhbGVNb2R1bGUgPSB7XG4gIGN1cnJlbnREYXRlTG9jYWxlOiBudWxsLFxuXG4gIGkxOG4sXG4gIGluaXQoKSB7XG4gICAgaTE4bi5sb2NhbGUgPSAnZW4tVVMnO1xuICAgIGkxOG4uZmFsbGJhY2tzID0gdHJ1ZTtcbiAgICBpMThuLmRlZmF1bHRMb2NhbGUgPSBmYWxsYmFja0xhbmd1YWdlO1xuICAgIGkxOG4udHJhbnNsYXRpb25zID0gc3VwcG9ydGVkTG9jYWxlcztcblxuICAgIGlmIChzdXBwb3J0ZWRMb2NhbGVzW0xvY2FsaXphdGlvbi5sb2NhbGVdKSB7XG4gICAgICBpMThuLnRyYW5zbGF0aW9uc1tMb2NhbGl6YXRpb24ubG9jYWxlXSA9XG4gICAgICAgIHN1cHBvcnRlZExvY2FsZXNbTG9jYWxpemF0aW9uLmxvY2FsZV07XG4gICAgICB0aGlzLmN1cnJlbnREYXRlTG9jYWxlID1cbiAgICAgICAgZGF0ZUxvY2FsZXNbTG9jYWxpemF0aW9uLmxvY2FsZS5yZXBsYWNlKCctJywgJycpXSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBpMThuLnRyYW5zbGF0aW9uc1tmYWxsYmFja0xhbmd1YWdlXSA9IHN1cHBvcnRlZExvY2FsZXNbZmFsbGJhY2tMYW5ndWFnZV07XG4gICAgICB0aGlzLmN1cnJlbnREYXRlTG9jYWxlID0gZmFsbGJhY2tEYXRlTG9jYWxlO1xuICAgIH1cbiAgfSxcblxuICB0KGtleSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIGkxOG4udChrZXksIHBhcmFtcyk7XG4gIH0sXG5cbiAgc2V0Q3VycmVudExhbmd1YWdlKGlucHV0KSB7XG4gICAgY29uc3QgbmV3TG9jYWwgPSBpbnB1dC5yZXBsYWNlKCdfJywgJy0nKTtcbiAgICBpMThuLmxvY2FsZSA9IG5ld0xvY2FsO1xuICAgIGkxOG4udHJhbnNsYXRpb25zID0ge307XG4gICAgaWYgKHN1cHBvcnRlZExvY2FsZXNbbmV3TG9jYWxdKSB7XG4gICAgICBpMThuLnRyYW5zbGF0aW9uc1tuZXdMb2NhbF0gPSBzdXBwb3J0ZWRMb2NhbGVzW25ld0xvY2FsXTtcbiAgICB9XG4gIH0sXG5cbiAgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRTdHIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIHtsb2NhbGU6IHRoaXMuZ2V0RGV2aWNlTG9jYWxlRm9yRGF0ZSgpfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHtlcnJvci5tZXNzYWdlfSAtIFBhcmFtczogRGF0ZTogJHtkYXRlfSAtIEZvcm1hdCBTdHJpbmc6ICR7Zm9ybWF0U3RyfWAsXG4gICAgICApO1xuICAgIH1cbiAgfSxcblxuICBwYXJzZUlTT0RhdGUoZGF0ZSkge1xuICAgIHJldHVybiBwYXJzZUlTTyhkYXRlKTtcbiAgfSxcblxuICBnZXREZXZpY2VMb2NhbGUoKSB7XG4gICAgaWYgKHN1cHBvcnRlZExvY2FsZXNbTG9jYWxpemF0aW9uLmxvY2FsZV0pIHtcbiAgICAgIHJldHVybiBpMThuLmxvY2FsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrTGFuZ3VhZ2U7XG4gICAgfVxuICB9LFxuXG4gIGdldERldmljZUxvY2FsZUZvckRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERhdGVMb2NhbGUgfHwgZmFsbGJhY2tEYXRlTG9jYWxlO1xuICB9LFxuXG4gIGZvcm1hdExhbmd1YWdlVW5kZXJzY29yZShsYW5ndWFnZSwgZGFzaCkge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgJ2VuJzpcbiAgICAgIGNhc2UgJ2VuLVVTJzpcbiAgICAgIGNhc2UgJ2VuX1VTJzpcbiAgICAgICAgcmV0dXJuIGRhc2ggPyAnZW4tVVMnIDogJ2VuX1VTJztcbiAgICAgIGNhc2UgJ2VzJzpcbiAgICAgIGNhc2UgJ2VzLUVTJzpcbiAgICAgIGNhc2UgJ2VzX0VTJzpcbiAgICAgICAgcmV0dXJuIGRhc2ggPyAnZXMtRVMnIDogJ2VzX0VTJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXNoID8gJ2VuLVVTJyA6ICdlbl9VUyc7XG4gICAgfVxuICB9LFxuXG4gIGdldExhbmd1YWdlTmFtZShsYW5ndWFnZSkge1xuICAgIGNvbnN0IGZvcm1hdHRlZExhbmd1YWdlID0gdGhpcy5mb3JtYXRMYW5ndWFnZVVuZGVyc2NvcmUobGFuZ3VhZ2UsIHRydWUpO1xuICAgIHJldHVybiBzdXBwb3J0ZWRMb2NhbGVzW2Zvcm1hdHRlZExhbmd1YWdlXSA/IGZvcm1hdHRlZExhbmd1YWdlIDogbnVsbDtcbiAgfSxcblxuICBsYW5ndWFnZUJ5RGVmYXVsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZVVuZGVyc2NvcmUoJycsIHRydWUpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIiwiaW1wb3J0IHtEaW1lbnNpb25zLCBQaXhlbFJhdGlvfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBnZXR0aW5nIHNjcmVlbiB3aWR0aCBhbmQgaGVpZ2h0XG5jb25zdCB3aWR0aCA9IERpbWVuc2lvbnMuZ2V0KCdzY3JlZW4nKS53aWR0aDtcbmNvbnN0IGhlaWdodCA9IERpbWVuc2lvbnMuZ2V0KCdzY3JlZW4nKS5oZWlnaHQ7XG5cbmNvbnN0IGlzVGFibGV0RGV2aWNlID0gKCkgPT4ge1xuICBsZXQgcGl4ZWxEZW5zaXR5ID0gUGl4ZWxSYXRpby5nZXQoKTtcbiAgY29uc3QgYWRqdXN0ZWRXaWR0aCA9IHdpZHRoICogcGl4ZWxEZW5zaXR5O1xuICBjb25zdCBhZGp1c3RlZEhlaWdodCA9IGhlaWdodCAqIHBpeGVsRGVuc2l0eTtcbiAgaWYgKHBpeGVsRGVuc2l0eSA8IDEuNiAmJiAoYWRqdXN0ZWRXaWR0aCA+PSAxMDAwIHx8IGFkanVzdGVkSGVpZ2h0ID49IDEwMDApKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBpeGVsRGVuc2l0eSA9PT0gMiAmJiAoYWRqdXN0ZWRXaWR0aCA+PSAxOTIwIHx8IGFkanVzdGVkSGVpZ2h0ID49IDE5MjApXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzVGFibGV0ID0gaXNUYWJsZXREZXZpY2UoKTtcbiIsImltcG9ydCB7U3R5bGVTaGVldH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7aXNUYWJsZXR9IGZyb20gJy4vc3JjL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGdlbmVyYWxTdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGJ1dHRvbkNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBpc1RhYmxldCA/ICczMCUnIDogJzEwMCUnLFxuICB9LFxuICBpY29uOiB7XG4gICAgaGVpZ2h0OiAxNSxcbiAgfSxcbiAgZnVsbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gIGNlbnRlckNvbHVtbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIGNlbnRlclJvdzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIHRvcFNlY3Rpb246IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogaXNUYWJsZXQgPyAncm93JyA6ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiBpc1RhYmxldCA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdmbGV4LXN0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luSG9yaXpvbnRhbDogaXNUYWJsZXQgPyAzNSA6IDI0LFxuICAgIG1hcmdpblZlcnRpY2FsOiAyNCxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uIGFzIEJ1dHRvblVJLCBOYXZiYXIgYXMgTmF2YmFyVUl9IGZyb20gJ2V0ZW5kby11aS1saWJyYXJ5JztcbmltcG9ydCB7U2FmZUFyZWFWaWV3fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtzdHlsZXN9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHtCYWNrSWNvbn0gZnJvbSAnZXRlbmRvLXVpLWxpYnJhcnknO1xuaW1wb3J0IGxvY2FsZSBmcm9tICcuLi8uLi9sb2NhbGl6YXRpb24vbG9jYWxlJztcbmltcG9ydCB7aXNUYWJsZXR9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7Z2VuZXJhbFN0eWxlc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzJztcbmludGVyZmFjZSBOYXZiYXJQcm9wcyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9uT3B0aW9uU2VsZWN0ZWQ/OiAocm91dGU6IGFueSkgPT4gdm9pZDtcbn1cblxuY29uc3QgTmF2YmFyID0gKHt1c2VybmFtZSwgdGl0bGUsIG9uT3B0aW9uU2VsZWN0ZWR9OiBOYXZiYXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTYWZlQXJlYVZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPE5hdmJhclVJXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgbmFtZT17dXNlcm5hbWV9XG4gICAgICAgIHByb2ZpbGVPcHRpb25zPXtcbiAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkICYmICFpc1RhYmxldFxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvY2FsZS50KCdDb21tb24uZ29CYWNrJyksXG4gICAgICAgICAgICAgICAgICBpbWFnZTogPEJhY2tJY29uIC8+LFxuICAgICAgICAgICAgICAgICAgcm91dGU6ICdIb21lJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIG9uT3B0aW9uU2VsZWN0ZWRQcm9maWxlPXtvbk9wdGlvblNlbGVjdGVkfVxuICAgICAgICBuYXZiYXJDb21wb25lbnRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgICAgICAgIDxCdXR0b25VSVxuICAgICAgICAgICAgICAgIHR5cGVTdHlsZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGljb25MZWZ0PXs8QmFja0ljb24gc3R5bGU9e2dlbmVyYWxTdHlsZXMuaWNvbn0gLz59XG4gICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsPXsxNn1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxuICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IG9uT3B0aW9uU2VsZWN0ZWQgJiYgb25PcHRpb25TZWxlY3RlZCgnSG9tZScpfVxuICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsZS50KCdDb21tb24uZ29CYWNrJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaW5PcHRpb25zOiB7dGl0bGU6IGxvY2FsZS50KCdDb21tb24uZ29CYWNrJyl9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvU2FmZUFyZWFWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IHtTdHlsZVNoZWV0fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtnZW5lcmFsU3R5bGVzfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMnO1xuaW1wb3J0IHtpc1RhYmxldH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAuLi5nZW5lcmFsU3R5bGVzLFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogaXNUYWJsZXQgPyAncm93JyA6ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luSG9yaXpvbnRhbDogaXNUYWJsZXQgPyAzMiA6IDI0LFxuICAgIGdhcDogMTIsXG4gICAgd2lkdGg6IGlzVGFibGV0ID8gJzY1JScgOiAnODglJyxcbiAgfSxcbiAgc2VhcmNoSW5wdXQ6IHtcbiAgICB3aWR0aDogaXNUYWJsZXQgPyAnNTAlJyA6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IGlzVGFibGV0ID8gMCA6IDYsXG4gICAgbWFyZ2luUmlnaHQ6IGlzVGFibGV0ID8gMTIgOiAwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0eWxlU2hlZXR9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge0NhbWVyYSwgQ2FtZXJhRGV2aWNlfSBmcm9tICdyZWFjdC1uYXRpdmUtdmlzaW9uLWNhbWVyYSc7XG5pbXBvcnQge3VzZVNjYW5CYXJjb2RlcywgQmFyY29kZUZvcm1hdH0gZnJvbSAndmlzaW9uLWNhbWVyYS1jb2RlLXNjYW5uZXInO1xuXG5jb25zdCBDQU1FUkFfU1RBVFVTID0gJ2F1dGhvcml6ZWQnO1xuY29uc3QgU0lERV9DQU1FUkEgPSAnYmFjayc7XG5cbmludGVyZmFjZSBDYW1lcmFCYXJDb2RlUHJvcHMge1xuICBhYmxlVG9SZWFkOiBib29sZWFuO1xuICBoYW5kbGVSZWFkQ29kZTogKGNvZGU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2FtZXJhQmFyQ29kZSA9ICh7YWJsZVRvUmVhZCwgaGFuZGxlUmVhZENvZGV9OiBDYW1lcmFCYXJDb2RlUHJvcHMpID0+IHtcbiAgY29uc3QgW2NhbWVyYVBlcm1pc3Npb24sIHNldENhbWVyYVBlcm1pc3Npb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGV2aWNlU2VsZWN0ZWQsIHNldERldmljZXNTZWxlY3RlZF0gPSB1c2VTdGF0ZTxDYW1lcmFEZXZpY2UgfCBudWxsPihcbiAgICBudWxsLFxuICApO1xuICBjb25zdCBbaXNSZWFkaW5nLCBzZXRJc1JlYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2FtZXJhUGVybWlzc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBDYW1lcmEucmVxdWVzdENhbWVyYVBlcm1pc3Npb24oKTtcbiAgICBzZXRDYW1lcmFQZXJtaXNzaW9uKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IFtmcmFtZVByb2Nlc3NvciwgYmFyY29kZXNdID0gdXNlU2NhbkJhcmNvZGVzKFxuICAgIFtCYXJjb2RlRm9ybWF0LkFMTF9GT1JNQVRTXSxcbiAgICB7Y2hlY2tJbnZlcnRlZDogdHJ1ZX0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY2FtZXJhUGVybWlzc2lvbnMgPSBhd2FpdCBDYW1lcmEuZ2V0Q2FtZXJhUGVybWlzc2lvblN0YXR1cygpO1xuICAgICAgc2V0Q2FtZXJhUGVybWlzc2lvbihjYW1lcmFQZXJtaXNzaW9ucyA9PSBDQU1FUkFfU1RBVFVTKTtcbiAgICAgIGNvbnN0IGRldmljZXNBdmFpbGFibGUgPSBhd2FpdCBDYW1lcmEuZ2V0QXZhaWxhYmxlQ2FtZXJhRGV2aWNlcygpO1xuICAgICAgY29uc3QgYmFja0NhbWVyYSA9IGRldmljZXNBdmFpbGFibGUuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IGl0ZW0ucG9zaXRpb24gPT0gU0lERV9DQU1FUkEsXG4gICAgICApO1xuICAgICAgY29uc3QgYWxnbyA9IGJhY2tDYW1lcmEubGVuZ3RoXG4gICAgICAgID8gKGJhY2tDYW1lcmEuc2hpZnQoKSBhcyBDYW1lcmFEZXZpY2UpXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHNldERldmljZXNTZWxlY3RlZChhbGdvIGFzIENhbWVyYURldmljZSk7XG4gICAgfSkoKTtcbiAgICBoYW5kbGVDYW1lcmFQZXJtaXNzaW9uKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhYmxlVG9SZWFkKSB7XG4gICAgICBoYW5kbGVCYXJjb2RlKCk7XG4gICAgfVxuICB9LCBbYWJsZVRvUmVhZCwgYmFyY29kZXNdKTtcblxuICBjb25zdCBoYW5kbGVCYXJjb2RlID0gKCkgPT4ge1xuICAgIGlmIChiYXJjb2Rlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBiYXJjb2Rlcy5zaGlmdCgpPy5kaXNwbGF5VmFsdWU7XG4gICAgICBzZXRJc1JlYWRpbmcoZmFsc2UpO1xuICAgICAgaGFuZGxlUmVhZENvZGUoY29kZSEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaXNSZWFkaW5nICYmIGRldmljZVNlbGVjdGVkICYmIGNhbWVyYVBlcm1pc3Npb24gPyAoXG4gICAgPENhbWVyYVxuICAgICAgc3R5bGU9e1N0eWxlU2hlZXQuYWJzb2x1dGVGaWxsfVxuICAgICAgZGV2aWNlPXtkZXZpY2VTZWxlY3RlZH1cbiAgICAgIGlzQWN0aXZlPXtpc1JlYWRpbmd9XG4gICAgICBmcmFtZVByb2Nlc3Nvcj17ZnJhbWVQcm9jZXNzb3J9XG4gICAgICBmcmFtZVByb2Nlc3NvckZwcz17NX1cbiAgICAvPlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUJhckNvZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNb2RhbCwgVmlld30gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBDYW1lcmFCYXJDb2RlIGZyb20gJy4uL2NhbWVyYUJhckNvZGUnO1xuaW1wb3J0IHtCdXR0b24gYXMgQnV0dG9uVUksIENhbmNlbEljb259IGZyb20gJ2V0ZW5kby11aS1saWJyYXJ5JztcbmltcG9ydCB7Z2VuZXJhbFN0eWxlc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzJztcbmltcG9ydCB7aXNUYWJsZXR9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBsb2NhbGUgZnJvbSAnLi4vLi4vbG9jYWxpemF0aW9uL2xvY2FsZSc7XG5cbmludGVyZmFjZSBDYW1lcmFQcm9wcyB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHNldFNob3c6IChzaG93OiBib29sZWFuKSA9PiB2b2lkO1xuICBoYW5kbGVSZWFkQ29kZTogKGNvZGU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2FtZXJhOiBSZWFjdC5GQzxDYW1lcmFQcm9wcz4gPSAoe3Nob3csIHNldFNob3csIGhhbmRsZVJlYWRDb2RlfSkgPT4ge1xuICByZXR1cm4gc2hvdyA/IChcbiAgICA8TW9kYWwgYW5pbWF0aW9uVHlwZT1cInNsaWRlXCIgdHJhbnNwYXJlbnQ9e3RydWV9IHZpc2libGU9e3Nob3d9PlxuICAgICAgPFZpZXdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB9fT5cbiAgICAgICAgPENhbWVyYUJhckNvZGUgYWJsZVRvUmVhZD17c2hvd30gaGFuZGxlUmVhZENvZGU9e2hhbmRsZVJlYWRDb2RlfSAvPlxuICAgICAgPC9WaWV3PlxuICAgICAgPFZpZXdcbiAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICBnZW5lcmFsU3R5bGVzLmJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJvdHRvbTogMzAsXG4gICAgICAgICAgICB3aWR0aDogaXNUYWJsZXQgPyAnMjAlJyA6ICc2MCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX0+XG4gICAgICAgIDxCdXR0b25VSVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICB0eXBlU3R5bGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93KGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRleHQ9e2xvY2FsZS50KCdDb21tb24uY2FuY2VsJyl9XG4gICAgICAgICAgaWNvbkxlZnQ9ezxDYW5jZWxJY29uIHN0eWxlPXtnZW5lcmFsU3R5bGVzLmljb259IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9WaWV3PlxuICAgIDwvTW9kYWw+XG4gICkgOiAoXG4gICAgPD48Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1ZpZXd9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge1xuICBCdXR0b24gYXMgQnV0dG9uVUksXG4gIElucHV0IGFzIElucHV0VUksXG4gIENhbWVyYUljb24sXG59IGZyb20gJ2V0ZW5kby11aS1saWJyYXJ5JztcbmltcG9ydCB7c3R5bGVzfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi4vY2FtZXJhJztcbmltcG9ydCB7aXNUYWJsZXR9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBsb2NhbGUgZnJvbSAnLi4vLi4vbG9jYWxpemF0aW9uL2xvY2FsZSc7XG5cbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW2JhcmNvZGUsIHNldEJhcmNvZGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlUmVhZENvZGUgPSAoY29kZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIHNldEJhcmNvZGUoY29kZSk7XG4gICAgICBzZXRTaG93KGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhbWVyYSBzaG93PXtzaG93fSBzZXRTaG93PXtzZXRTaG93fSBoYW5kbGVSZWFkQ29kZT17aGFuZGxlUmVhZENvZGV9IC8+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VhcmNoSW5wdXR9PlxuICAgICAgICAgIDxJbnB1dFVJXG4gICAgICAgICAgICB2YWx1ZT17YmFyY29kZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17KHZhbHVlOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+KSA9PlxuICAgICAgICAgICAgICBzZXRCYXJjb2RlKHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvY2FsZS50KCdIb21lLnR5cGVQcm9kdWN0Jyl9XG4gICAgICAgICAgICB0eXBlRmllbGQ9XCJ0ZXh0SW5wdXRTZWFyY2hcIlxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmJ1dHRvbkNvbnRhaW5lcl19PlxuICAgICAgICAgIDxCdXR0b25VSVxuICAgICAgICAgICAgd2lkdGg9e2lzVGFibGV0ID8gJzcwJScgOiAnMTAwJSd9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgdHlwZVN0eWxlPVwidGVyY2lhcnlcIlxuICAgICAgICAgICAgaWNvbkxlZnQ9ezxDYW1lcmFJY29uIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz59XG4gICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGV4dD17bG9jYWxlLnQoJ0hvbWUuc2VhcmNoQmFyY29kZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiIsImltcG9ydCB7U3R5bGVTaGVldH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7aXNUYWJsZXR9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7Z2VuZXJhbFN0eWxlc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgLi4uZ2VuZXJhbFN0eWxlcyxcbiAgdGFibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiBpc1RhYmxldCA/IDMyIDogMjQsXG4gICAgaGVpZ2h0OiAnNTUlJyxcbiAgfSxcbiAgaWNvbjoge1xuICAgIGhlaWdodDogaXNUYWJsZXQgPyAyNSA6IDIwLFxuICB9LFxufSk7XG4iLCJpbXBvcnQge1N0eWxlU2hlZXR9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge1BSSU1BUllfMTAwfSBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcbmltcG9ydCB7aXNUYWJsZXR9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgbW9kYWxDb250YWluZXI6IHtcbiAgICBmbGV4OiAxLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIG1vZGFsQ29udGVudDoge1xuICAgIHdpZHRoOiBpc1RhYmxldCA/ICczMCUnIDogJzgwJScsXG4gICAgaGVpZ2h0OiBpc1RhYmxldCA/ICczNSUnIDogJzI1JScsXG4gICAgcGFkZGluZ0hvcml6b250YWw6IDIwLFxuICAgIHBhZGRpbmdWZXJ0aWNhbDogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgbW9kYWxUZXh0OiB7XG4gICAgZm9udFNpemU6IDI5LFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IFBSSU1BUllfMTAwLFxuICB9LFxuICBidXR0b25UZXh0OiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgYnV0dG9uTW9kYWxDb250YWluZXI6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBpc1RhYmxldCA/ICc0MCUnIDogJzQ1JScsXG4gIH0sXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RleHQsIFZpZXcsIE1vZGFsIGFzIE1vZGFsUk59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge3N0eWxlc30gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQge0J1dHRvbiBhcyBCdXR0b25VSSwgQ2FuY2VsSWNvbiwgQ2hlY2tJY29ufSBmcm9tICdldGVuZG8tdWktbGlicmFyeSc7XG5pbXBvcnQge2dlbmVyYWxTdHlsZXN9IGZyb20gJy4uLy4uLy4uL3N0eWxlcyc7XG5pbnRlcmZhY2UgTW9kYWxQcm9wcyB7XG4gIHRleHRNb2RhbDogc3RyaW5nO1xuICB0ZXh0Q29uZmlybTogc3RyaW5nO1xuICB0ZXh0Q2FuY2VsOiBzdHJpbmc7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIHNldFZpc2libGU6ICgpID0+IHZvaWQ7XG4gIGZ1bmN0aW9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgZnVuY3Rpb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1vZGFsID0gKHtcbiAgdGV4dE1vZGFsLFxuICB0ZXh0Q29uZmlybSxcbiAgdmlzaWJsZSxcbiAgdGV4dENhbmNlbCxcbiAgc2V0VmlzaWJsZSxcbiAgZnVuY3Rpb25Db25maXJtLFxuICBmdW5jdGlvbkNhbmNlbCxcbn06IE1vZGFsUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxSTlxuICAgICAgYW5pbWF0aW9uVHlwZT1cImZhZGVcIlxuICAgICAgdHJhbnNwYXJlbnQ9e3RydWV9XG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e3NldFZpc2libGV9PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5tb2RhbENvbnRhaW5lcn0+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubW9kYWxDb250ZW50fT5cbiAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubW9kYWxUZXh0fT57dGV4dE1vZGFsfTwvVGV4dD5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b25Nb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5idXR0b25Db250YWluZXJdfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblVJXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgIHR5cGVTdHlsZT1cIndoaXRlQm9yZGVyXCJcbiAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbkNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGV4dD17dGV4dENhbmNlbH1cbiAgICAgICAgICAgICAgICBpY29uTGVmdD17PENhbmNlbEljb24gc3R5bGU9e2dlbmVyYWxTdHlsZXMuaWNvbn0gLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmJ1dHRvbkNvbnRhaW5lcl19PlxuICAgICAgICAgICAgICA8QnV0dG9uVUlcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgdHlwZVN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvbmZpcm0oKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRleHQ9e3RleHRDb25maXJtfVxuICAgICAgICAgICAgICAgIGljb25MZWZ0PXs8Q2hlY2tJY29uIHN0eWxlPXtnZW5lcmFsU3R5bGVzLmljb259IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgPC9WaWV3PlxuICAgIDwvTW9kYWxSTj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7c3R5bGVzfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7Vmlld30gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7XG4gIFRhYmxlIGFzIFRhYmxlVUksXG4gIFRyYXNoSWNvbixcbiAgUGVuY2lsSWNvbixcbiAgQ2FuY2VsSWNvbixcbiAgQ2hlY2tJY29uLFxufSBmcm9tICdldGVuZG8tdWktbGlicmFyeSc7XG5pbXBvcnQge2lzVGFibGV0fSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQge0NvbHVtbnN9IGZyb20gJ2V0ZW5kby11aS1saWJyYXJ5L2Rpc3QtbmF0aXZlL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHlwZXMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsJztcbmltcG9ydCB7TmF2aWdhdGlvblByb3B9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQge0lQcm9kdWN0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBsb2NhbGUgZnJvbSAnLi4vLi4vbG9jYWxpemF0aW9uL2xvY2FsZSc7XG5cbmludGVyZmFjZSBJSWNvblRvdWNoYWJsZSB7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBJY29uVG91Y2hhYmxlID0gKHthY3Rpb259OiBJSWNvblRvdWNoYWJsZSkgPT4ge1xuICBsZXQgaWNvbjtcbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlICdlZGl0JzpcbiAgICAgIGljb24gPSA8UGVuY2lsSWNvbiBzdHlsZT17c3R5bGVzLmljb259IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgIGljb24gPSA8Q2FuY2VsSWNvbiBzdHlsZT17c3R5bGVzLmljb259IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgIGljb24gPSA8VHJhc2hJY29uIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjaGVjayc6XG4gICAgICBpY29uID0gPENoZWNrSWNvbiBzdHlsZT17c3R5bGVzLmljb259IC8+O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWNvbiA9IDxDaGVja0ljb24gc3R5bGU9e3N0eWxlcy5pY29ufSAvPjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiAoXG4gICAgPFZpZXdcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogaXNUYWJsZXQgPyAncm93JyA6ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBtYXJnaW5SaWdodDogaXNUYWJsZXQgPyAnMTAlJyA6ICc1JScsXG4gICAgICB9fT5cbiAgICAgIHtpY29ufVxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBUYWJsZVByb3BzIHtcbiAgbmF2aWdhdGlvbjogTmF2aWdhdGlvblByb3A8YW55Pjtcbn1cbmNvbnN0IFRhYmxlID0gKHtuYXZpZ2F0aW9ufTogVGFibGVQcm9wcykgPT4ge1xuICBjb25zdCBbbW9kYWxBY3RpdmUsIHNldE1vZGFsQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkYXRhVGFibGU6IElQcm9kdWN0W10gPSBbXG4gICAge1xuICAgICAgX2lkOiAnNjM3Mjg5NTU2NDc1Yzk2NGY1NmNmN2I2JyxcbiAgICAgIG5hbWU6ICdHZWwgRmFjaWFsIE5pdmVhIEV4Zm9saWFudGUgQWxvZSBWZXJhIDc1bWwnLFxuICAgICAgYmFyY29kZTogJzQwMDU4MDg5NDAwMDEnLFxuICAgIH0sXG4gICAge1xuICAgICAgX2lkOiAnNjM3Mjg5NTU2NDc1Yzk2NGY1NmNmYXNhNicsXG4gICAgICBuYW1lOiAnQWxpbWVudG8gUGFyYSBHYXRvcyBlbiBMYXRhIFdoaXNrYXMgUGFzdGEgR2F0aXRvcyAzNDAgR3InLFxuICAgICAgYmFyY29kZTogJzQwMDU4MDg5NDAwMDInLFxuICAgIH0sXG4gICAge1xuICAgICAgX2lkOiAnNjM3Mjg5NTU2NDc1Yzk2NGY1NmNmN2I3JyxcbiAgICAgIG5hbWU6ICdDZXJ2ZXphIFF1aWxtZXMgRG9ibGUgTWFsdGEgNDczY2MgU2l4cGFjaycsXG4gICAgICBiYXJjb2RlOiAnNDAwNTgwODk0MDAwMycsXG4gICAgfSxcbiAgICB7XG4gICAgICBfaWQ6ICc2MzcyODk1NTY0NzVjOTY0ZjU2Y2Zhc2E2JyxcbiAgICAgIG5hbWU6ICdBbGltZW50byBQYXJhIEdhdG9zIGVuIExhdGEgV2hpc2thcyBQYXN0YSBHYXRpdG9zIDM0MCBHcicsXG4gICAgICBiYXJjb2RlOiAnNDAwNTgwODk0MDAwMicsXG4gICAgfSxcbiAgICB7XG4gICAgICBfaWQ6ICc2MzcyODk1NTY0NzVjOTY0ZjU2Y2Y3YjcnLFxuICAgICAgbmFtZTogJ0NlcnZlemEgUXVpbG1lcyBEb2JsZSBNYWx0YSA0NzNjYyBTaXhwYWNrJyxcbiAgICAgIGJhcmNvZGU6ICc0MDA1ODA4OTQwMDAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIF9pZDogJzYzNzI4OTU1NjQ3NWM5NjRmNTZjZmFzYTYnLFxuICAgICAgbmFtZTogJ0FsaW1lbnRvIFBhcmEgR2F0b3MgZW4gTGF0YSBXaGlza2FzIFBhc3RhIEdhdGl0b3MgMzQwIEdyJyxcbiAgICAgIGJhcmNvZGU6ICc0MDA1ODA4OTQwMDAyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIF9pZDogJzYzNzI4OTU1NjQ3NWM5NjRmNTZjZjdiNycsXG4gICAgICBuYW1lOiAnQ2VydmV6YSBRdWlsbWVzIERvYmxlIE1hbHRhIDQ3M2NjIFNpeHBhY2snLFxuICAgICAgYmFyY29kZTogJzQwMDU4MDg5NDAwMDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgX2lkOiAnNjM3Mjg5NTU2NDc1Yzk2NGY1NmNmYXNhNicsXG4gICAgICBuYW1lOiAnQWxpbWVudG8gUGFyYSBHYXRvcyBlbiBMYXRhIFdoaXNrYXMgUGFzdGEgR2F0aXRvcyAzNDAgR3InLFxuICAgICAgYmFyY29kZTogJzQwMDU4MDg5NDAwMDInLFxuICAgIH0sXG4gICAge1xuICAgICAgX2lkOiAnNjM3Mjg5NTU2NDc1Yzk2NGY1NmNmN2I3JyxcbiAgICAgIG5hbWU6ICdDZXJ2ZXphIFF1aWxtZXMgRG9ibGUgTWFsdGEgNDczY2MgU2l4cGFjaycsXG4gICAgICBiYXJjb2RlOiAnNDAwNTgwODk0MDAwMycsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBkYXRhQ29sdW1uczogQ29sdW1uc1tdID0gW1xuICAgIHtcbiAgICAgIGtleTogJ19pZCcsXG4gICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICduYW1lJyxcbiAgICAgIGxhYmVsOiBsb2NhbGUudCgnVGFibGUucHJvZHVjdHMnKSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB3aWR0aDogJzUwJScsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdiYXJjb2RlJyxcbiAgICAgIGxhYmVsOiBpc1RhYmxldFxuICAgICAgICA/IGxvY2FsZS50KCdUYWJsZS5iYXJjb2RlJylcbiAgICAgICAgOiBsb2NhbGUudCgnVGFibGUuYmFyY29kZVNob3J0JyksXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnYWN0aW9ucycsXG4gICAgICBsYWJlbDogaXNUYWJsZXQgPyBsb2NhbGUudCgnVGFibGUuYWN0aW9ucycpIDogJycsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgY2VsbFN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgfSxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbXBvbmVudDogPEljb25Ub3VjaGFibGUgYWN0aW9uPVwiZWRpdFwiIC8+LFxuICAgICAgICAgIG9uQWN0aW9uOiAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbTEnLCBpdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1TZWxlY3RlZCA9IGRhdGFUYWJsZS5maW5kKFxuICAgICAgICAgICAgICBpdGVtRGF0YSA9PiBpdGVtRGF0YS5faWQgPT09IGl0ZW0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFpdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEl0ZW06IElQcm9kdWN0ID0ge1xuICAgICAgICAgICAgICBfaWQ6IGl0ZW0sXG4gICAgICAgICAgICAgIG5hbWU6IGl0ZW1TZWxlY3RlZC5uYW1lLFxuICAgICAgICAgICAgICBiYXJjb2RlOiBpdGVtU2VsZWN0ZWQuYmFyY29kZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG5hdmlnYXRpb24ubmF2aWdhdGUoJ1Byb2R1Y3REZXRhaWwnLCB7cHJvZHVjdEl0ZW19KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29tcG9uZW50OiA8SWNvblRvdWNoYWJsZSBhY3Rpb249XCJkZWxldGVcIiAvPixcbiAgICAgICAgICBvbkFjdGlvbjogKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0yJywgaXRlbSk7XG4gICAgICAgICAgICBzZXRNb2RhbEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxBY3RpdmUoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50YWJsZX0+XG4gICAgICA8VGFibGVVSVxuICAgICAgICBjb2x1bW5zPXtkYXRhQ29sdW1uc31cbiAgICAgICAgZGF0YT17ZGF0YVRhYmxlfVxuICAgICAgICB0YWJsZUhlaWdodD17JzEwMCUnfVxuICAgICAgICBvblJvd1ByZXNzPXsoYWxnbzogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FsZ28nLCBhbGdvKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7bW9kYWxBY3RpdmUgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB0ZXh0TW9kYWw9e2xvY2FsZS50KCdNb2RhbC5tZXNzYWdlRGVsZXRlJyl9XG4gICAgICAgICAgdGV4dENvbmZpcm09e2xvY2FsZS50KCdDb21tb24uYWNjZXB0Jyl9XG4gICAgICAgICAgdGV4dENhbmNlbD17bG9jYWxlLnQoJ0NvbW1vbi5jYW5jZWwnKX1cbiAgICAgICAgICB2aXNpYmxlPXttb2RhbEFjdGl2ZX1cbiAgICAgICAgICBzZXRWaXNpYmxlPXtjbG9zZU1vZGFsfVxuICAgICAgICAgIGZ1bmN0aW9uQ29uZmlybT17Y2xvc2VNb2RhbH1cbiAgICAgICAgICBmdW5jdGlvbkNhbmNlbD17Y2xvc2VNb2RhbH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJpbXBvcnQge1N0eWxlU2hlZXR9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge2dlbmVyYWxTdHlsZXN9IGZyb20gJy4uLy4uLy4uL3N0eWxlcyc7XG5pbXBvcnQge2lzVGFibGV0fSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQge1BSSU1BUllfMTAwfSBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgLi4uZ2VuZXJhbFN0eWxlcyxcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI5LFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG1hcmdpbkJvdHRvbTogNixcbiAgICBjb2xvcjogUFJJTUFSWV8xMDAsXG4gIH0sXG4gIHRvcFZpZXc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogaXNUYWJsZXQgPyAncm93JyA6ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiBpc1RhYmxldCA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdmbGV4LXN0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luOiBpc1RhYmxldCA/IDMyIDogMjQsXG4gICAgZ2FwOiAxMixcbiAgfSxcbiAgdGV4dDoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgY29sb3I6ICcjMjAyNDUyJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMjQ1MicsXG4gICAgcGFkZGluZzogMTAsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gIH0sXG4gIHRleHRCdXR0b246IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUZXh0LCBWaWV3fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5cbmltcG9ydCB7QnV0dG9uIGFzIEJ1dHRvblVJLCBNb3JlSWNvbn0gZnJvbSAnZXRlbmRvLXVpLWxpYnJhcnknO1xuXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYmxlJztcbmltcG9ydCB7c3R5bGVzfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7TmF2aWdhdGlvblByb3B9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQge2lzVGFibGV0fSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgbG9jYWxlIGZyb20gJy4uLy4uL2xvY2FsaXphdGlvbi9sb2NhbGUnO1xuaW1wb3J0IHtJTmF2aWdhdGlvbkNvbnRhaW5lclByb3BzfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIG5hdmlnYXRpb246IE5hdmlnYXRpb25Qcm9wPGFueT47XG4gIHJvdXRlOiBhbnk7XG4gIG5hdmlnYXRpb25Db250YWluZXI6IElOYXZpZ2F0aW9uQ29udGFpbmVyUHJvcHM7XG59XG5cbmNvbnN0IEhvbWUgPSAoe25hdmlnYXRpb24sIHJvdXRlLCBuYXZpZ2F0aW9uQ29udGFpbmVyfTogSG9tZVByb3BzKSA9PiB7XG4gIGNvbnN0IHtkYXRhVXNlcn0gPSByb3V0ZS5wYXJhbXM7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPE5hdmJhclxuICAgICAgICB0aXRsZT17bG9jYWxlLnQoJ0hvbWUud2VsY29tZScpfVxuICAgICAgICB1c2VybmFtZT17ZGF0YVVzZXI/LnVzZXJuYW1lfVxuICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXsoKSA9PiB7XG4gICAgICAgICAgbmF2aWdhdGlvbkNvbnRhaW5lci5uYXZpZ2F0ZSgnSG9tZScpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudG9wVmlld30+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGl0bGV9Pntsb2NhbGUudCgnSG9tZS5wcm9kdWN0TGlzdCcpfTwvVGV4dD5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25VSVxuICAgICAgICAgICAgd2lkdGg9e2lzVGFibGV0ID8gJzEwMCUnIDogJzYwJSd9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgdHlwZVN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZSgnUHJvZHVjdERldGFpbCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRleHQ9e2xvY2FsZS50KCdIb21lLm5ld1Byb2R1Y3QnKX1cbiAgICAgICAgICAgIGljb25MZWZ0PXs8TW9yZUljb24gc3R5bGU9e3N0eWxlcy5pY29ufSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG4gICAgICA8U2VhcmNoIC8+XG4gICAgICA8VGFibGUgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHtTdHlsZVNoZWV0fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtnZW5lcmFsU3R5bGVzfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMnO1xuaW1wb3J0IHtpc1RhYmxldH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHtQUklNQVJZXzEwMH0gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIC4uLmdlbmVyYWxTdHlsZXMsXG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6IDEsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI5LFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGNvbG9yOiBQUklNQVJZXzEwMCxcbiAgfSxcbiAgYnV0dG9uQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IGlzVGFibGV0ID8gJzQwJScgOiAnNjAlJyxcbiAgICBtYXJnaW46IDYsXG4gIH0sXG5cbiAgaW5wdXRTZWN0aW9uOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IGlzVGFibGV0ID8gJ3JvdycgOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYXJnaW46IGlzVGFibGV0ID8gMzUgOiAyNCxcbiAgfSxcbiAgYnV0dG9uU2VjdGlvbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogaXNUYWJsZXQgPyAnZmxleC1lbmQnIDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZ2FwOiAxMixcbiAgICBtYXJnaW5Ib3Jpem9udGFsOiBpc1RhYmxldCA/IDAgOiAzMixcbiAgICB3aWR0aDogaXNUYWJsZXQgPyAnNDAlJyA6ICc3NSUnLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RleHQsIFZpZXd9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcblxuaW1wb3J0IHtcbiAgQnV0dG9uIGFzIEJ1dHRvblVJLFxuICBJbnB1dCBhcyBJbnB1dFVJLFxuICBDYW5jZWxJY29uLFxuICBDaGVja0ljb24sXG4gIENhbWVyYUljb24sXG59IGZyb20gJ2V0ZW5kby11aS1saWJyYXJ5JztcbmltcG9ydCB7c3R5bGVzfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7TmF2aWdhdGlvblByb3B9IGZyb20gJ0ByZWFjdC1uYXZpZ2F0aW9uL25hdGl2ZSc7XG5pbXBvcnQge2lzVGFibGV0fSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FtZXJhJztcbmltcG9ydCBsb2NhbGUgZnJvbSAnLi4vLi4vbG9jYWxpemF0aW9uL2xvY2FsZSc7XG5cbmludGVyZmFjZSBQcm9kdWN0RGV0YWlsUHJvcHMge1xuICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uUHJvcDxhbnk+O1xuICByb3V0ZTogYW55O1xufVxuXG5jb25zdCBQcm9kdWN0RGV0YWlsOiBSZWFjdC5GQzxQcm9kdWN0RGV0YWlsUHJvcHM+ID0gKHtuYXZpZ2F0aW9uLCByb3V0ZX0pID0+IHtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYmFyY29kZSwgc2V0QmFyY29kZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtkYXRhVXNlciwgcHJvZHVjdEl0ZW19ID0gcm91dGUucGFyYW1zO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2R1Y3RJdGVtKSB7XG4gICAgICBzZXRQcm9kdWN0KHByb2R1Y3RJdGVtLm5hbWUpO1xuICAgICAgc2V0QmFyY29kZShwcm9kdWN0SXRlbS5iYXJjb2RlKTtcbiAgICAgIHNldFRpdGxlKGxvY2FsZS50KCdQcm9kdWN0RGV0YWlsLmVkaXRQcm9kdWN0JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaXRsZShsb2NhbGUudCgnUHJvZHVjdERldGFpbC5uZXdQcm9kdWN0JykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVJlYWRDb2RlID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICBzZXRCYXJjb2RlKGNvZGUpO1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBzZXRQcm9kdWN0KCcnKTtcbiAgICBzZXRCYXJjb2RlKCcnKTtcbiAgICBzZXRTaG93KGZhbHNlKTtcbiAgICBuYXZpZ2F0aW9uLmdvQmFjaygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgLy8gVE9ETzogYWRkIGxvZ2ljIHRvIHNhdmUgcHJvZHVjdFxuICAgIG5hdmlnYXRpb24uZ29CYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhbWVyYSBzaG93PXtzaG93fSBzZXRTaG93PXtzZXRTaG93fSBoYW5kbGVSZWFkQ29kZT17aGFuZGxlUmVhZENvZGV9IC8+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZiYXJcbiAgICAgICAgICB0aXRsZT17J1Byb2R1Y3REZXRhaWwud2VsY29tZSd9XG4gICAgICAgICAgdXNlcm5hbWU9e2RhdGFVc2VyPy51c2VybmFtZX1cbiAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXsocm91dGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbj8ubmF2aWdhdGUocm91dGUhKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudG9wU2VjdGlvbn0+XG4gICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBpc1RhYmxldCA/ICc1MCUnIDogJzEwMCUnLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9UZXh0PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5idXR0b25TZWN0aW9uXX0+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxCdXR0b25VSVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICB0eXBlU3R5bGU9XCJ3aGl0ZUJvcmRlclwiXG4gICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGUudCgnQ29tbW9uLmNhbmNlbCcpfVxuICAgICAgICAgICAgICAgIGljb25MZWZ0PXs8Q2FuY2VsSWNvbiBzdHlsZT17c3R5bGVzLmljb259IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8QnV0dG9uVUlcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgdHlwZVN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGUudCgnQ29tbW9uLnNhdmUnKX1cbiAgICAgICAgICAgICAgICBpY29uTGVmdD17PENoZWNrSWNvbiBzdHlsZT17c3R5bGVzLmljb259IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5pbnB1dFNlY3Rpb25dfT5cbiAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IGlzVGFibGV0ID8gJzU1JScgOiAnMTAwJScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBpc1RhYmxldCA/IDI4IDogMCxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPElucHV0VUlcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIlwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9jYWxlLnQoJ1Byb2R1Y3REZXRhaWwucHJvZHVjdEV4YW1wbGUnKX1cbiAgICAgICAgICAgICAgdGl0bGVMYWJlbD17bG9jYWxlLnQoJ1Byb2R1Y3REZXRhaWwucHJvZHVjdHMnKX1cbiAgICAgICAgICAgICAgdHlwZUZpZWxkPVwidGV4dElucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17KHZhbHVlOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+KSA9PlxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3QodmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogaXNUYWJsZXQgPyAnNDIlJyA6ICcxMDAlJyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogaXNUYWJsZXQgPyAnODglJyA6ICc4MCUnLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPElucHV0VUlcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJcIlxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJcIlxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvY2FsZS50KCdQcm9kdWN0RGV0YWlsLmJhcmNvZGVQbGFjZWhvbGRlcicpfVxuICAgICAgICAgICAgICAgIHRpdGxlTGFiZWw9e2xvY2FsZS50KCdQcm9kdWN0RGV0YWlsLmJhcmNvZGUnKX1cbiAgICAgICAgICAgICAgICB0eXBlRmllbGQ9XCJ0ZXh0SW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtiYXJjb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17KHZhbHVlOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+KSA9PlxuICAgICAgICAgICAgICAgICAgc2V0QmFyY29kZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxCdXR0b25VSVxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgIHR5cGVTdHlsZT1cInRlcmNpYXJ5XCJcbiAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGV4dD1cIlwiXG4gICAgICAgICAgICAgICAgaWNvbkxlZnQ9ezxDYW1lcmFJY29uIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vc3JjL3NjcmVlbnMvaG9tZSc7XG5pbXBvcnQge2NyZWF0ZVN0YWNrTmF2aWdhdG9yfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9zdGFjayc7XG5pbXBvcnQgbG9jYWxlIGZyb20gJy4vc3JjL2xvY2FsaXphdGlvbi9sb2NhbGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSAnLi9zcmMvc2NyZWVucy9wcm9kdWN0RGV0YWlsJztcbmltcG9ydCB7SURhdGEsIElOYXZpZ2F0aW9uQ29udGFpbmVyUHJvcHN9IGZyb20gJy4vc3JjL2ludGVyZmFjZXMnO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgZGF0YVVzZXI6IElEYXRhO1xuICBuYXZpZ2F0aW9uQ29udGFpbmVyOiBJTmF2aWdhdGlvbkNvbnRhaW5lclByb3BzO1xufVxuXG5jb25zdCBBcHAgPSAoe2xhbmd1YWdlLCBuYXZpZ2F0aW9uQ29udGFpbmVyLCBkYXRhVXNlcn06IEhvbWVQcm9wcykgPT4ge1xuICBjb25zdCBTdGFjayA9IGNyZWF0ZVN0YWNrTmF2aWdhdG9yKCk7XG5cbiAgbG9jYWxlLmluaXQoKTtcbiAgbG9jYWxlLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbGUuZm9ybWF0TGFuZ3VhZ2VVbmRlcnNjb3JlKGxhbmd1YWdlKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2suTmF2aWdhdG9yIGluaXRpYWxSb3V0ZU5hbWU9XCJIb21lXCI+XG4gICAgICA8U3RhY2suU2NyZWVuXG4gICAgICAgIG9wdGlvbnM9e3toZWFkZXJTaG93bjogZmFsc2V9fVxuICAgICAgICBuYW1lPVwiSG9tZVwiXG4gICAgICAgIGluaXRpYWxQYXJhbXM9e3tkYXRhVXNlcn19PlxuICAgICAgICB7cHJvcHMgPT4gPEhvbWUgey4uLnByb3BzfSBuYXZpZ2F0aW9uQ29udGFpbmVyPXtuYXZpZ2F0aW9uQ29udGFpbmVyfSAvPn1cbiAgICAgIDwvU3RhY2suU2NyZWVuPlxuICAgICAgPFN0YWNrLlNjcmVlblxuICAgICAgICBvcHRpb25zPXt7aGVhZGVyU2hvd246IGZhbHNlfX1cbiAgICAgICAgbmFtZT1cIlByb2R1Y3REZXRhaWxcIlxuICAgICAgICBpbml0aWFsUGFyYW1zPXt7ZGF0YVVzZXJ9fT5cbiAgICAgICAge3Byb3BzID0+IDxQcm9kdWN0RGV0YWlsIHsuLi5wcm9wc30gLz59XG4gICAgICA8L1N0YWNrLlNjcmVlbj5cbiAgICA8L1N0YWNrLk5hdmlnYXRvcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7QXBwfTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiZW5VUyIsImVzRVMiLCJpMThuIiwiZm9ybWF0IiwicGFyc2VJU08iLCJEaW1lbnNpb25zIiwiUGl4ZWxSYXRpbyIsIlJlYWN0IiwiU2FmZUFyZWFWaWV3IiwiTmF2YmFyVUkiLCJCYWNrSWNvbiIsIkJ1dHRvblVJIiwidXNlU3RhdGUiLCJDYW1lcmEiLCJ1c2VTY2FuQmFyY29kZXMiLCJCYXJjb2RlRm9ybWF0IiwidXNlRWZmZWN0IiwiTW9kYWwiLCJWaWV3IiwiQ2FuY2VsSWNvbiIsIklucHV0VUkiLCJDYW1lcmFJY29uIiwiTW9kYWxSTiIsIlRleHQiLCJDaGVja0ljb24iLCJQZW5jaWxJY29uIiwiVHJhc2hJY29uIiwiVGFibGVVSSIsIk1vcmVJY29uIiwiY3JlYXRlU3RhY2tOYXZpZ2F0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ08sSUFBSSxRQUFRLEdBQUcsV0FBVztBQUNqQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyRCxRQUFRLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdELFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixZQUFZLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLFNBQVM7QUFDVCxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLE1BQUs7QUFDTCxJQUFJLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0MsRUFBQztBQXlFRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFB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
