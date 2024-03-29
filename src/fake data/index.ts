import {
  type AutoImportOrderPackageType,
  type AutoImportRequestPackageType,
} from "~/contexts/AutoImportContext";
import {
  type ExportDraftPackageType,
  type ExportOrderPackageType,
  type ExportRequestPackageType,
} from "~/contexts/ExportContext";
import {
  type ImportDraftPackageType,
  type ImportOrderPackageType,
  type ImportRequestPackageType,
} from "~/contexts/ImportContext";
import { type NotificationItemType } from "~/contexts/NotificationContext";
import { PaymentPackageType } from "~/contexts/PaymentContext";
import {
  type ShopDraftPackageType,
  type ShopOrderPackageType,
  type ShopRequestPackageType,
} from "~/contexts/ShopContext";

const src = "https://placehold.co/500x500/cac4d0/1d192b?text=Image";

export const notificationItems: NotificationItemType[] = [
  {
    localDate: new Date().toLocaleString(),
    type: "payment confirmation",
    order: {
      orderId: "OD08753",
      orderStatus: "responded",
      orderLocalDate: new Date().toLocaleString(),
      trackingId: "SH08753",
      shippingStatus: "ready for shipping",
      shopForMeStatus: "Purchase completed",
      shopForMeCost: 107.76,
      shippingCost: 107.76,
      originWarehouse: "China Warehouse (Guangzhou city)",
      items: [
        {
          store: "Amazon",
          urgent: false,
          url: "",
          name: "Designer Bags",
          originalCost: 1,
          quantity: 1,
          shippingCost: 1,
          image: src,
          description: "",
        },
      ],
    },
  },
  {
    localDate: new Date("2022/12/12").toLocaleString(),
    type: "shipment arrival",
    order: {
      orderId: "OD08753",
      orderStatus: "responded",
      orderLocalDate: new Date().toLocaleString(),
      trackingId: "SH08753",
      shippingStatus: "ready for shipping",
      shopForMeStatus: "Purchase completed",
      shopForMeCost: 107.76,
      shippingCost: 107.76,
      originWarehouse: "China Warehouse (Guangzhou city)",
      items: [
        {
          store: "Amazon",
          urgent: false,
          url: "",
          name: "Designer Bags",
          originalCost: 1,
          quantity: 1,
          shippingCost: 1,
          image: src,
          description: "",
        },
      ],
    },
  },
  {
    localDate: new Date("2023/2/23").toLocaleString(),
    type: "payment rejection",
    order: {
      orderId: "OD08751",
      orderStatus: "processed",
      orderLocalDate: new Date().toLocaleString(),
      trackingId: "SH08751",
      shippingStatus: "not started",
      shopForMeStatus: "Purchase not started",
      shopForMeCost: 107.76,
      shippingCost: 107.76,
      originWarehouse: "Nigeria Warehouse (Lagos)",
      items: [
        {
          store: "Amazon",
          urgent: false,
          url: "",
          name: "Designer Bags",
          originalCost: 1,
          quantity: 1,
          shippingCost: 1,
          image: src,
          description: "",
        },
      ],
    },
  },
];

export const shopOrders: ShopOrderPackageType[] = [
  {
    orderId: "OD08751",
    orderStatus: "processed",
    orderLocalDate: new Date("2023/1/23").toLocaleString(),
    trackingId: "SH08751",
    shippingStatus: "not started",
    shopForMeStatus: "Purchase not started",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "Nigeria Warehouse (Lagos)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Aliexpress",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08752",
    orderStatus: "not responded",
    orderLocalDate: new Date("2023/2/23").toLocaleString(),
    trackingId: "SH08752",
    shippingStatus: "arrived destination",
    shopForMeStatus: "Purchase in progress",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "US Warehouse (Richmond Texas)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Aliexpress",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Others",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08753",
    orderStatus: "responded",
    orderLocalDate: new Date("2023/3/23").toLocaleString(),
    trackingId: "SH08753",
    shippingStatus: "ready for shipping",
    shopForMeStatus: "Purchase completed",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "China Warehouse (Guangzhou city)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Aliexpress",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Others",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Others",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08754",
    orderStatus: "processed",
    orderLocalDate: new Date("2023/4/23").toLocaleString(),
    trackingId: "SH08754",
    shippingStatus: "in transit",
    shopForMeStatus: "Purchase completed",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "Dubai Warehouse",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Aliexpress",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Others",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Others",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
      {
        store: "Others",
        urgent: true,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08755",
    orderStatus: "not responded",
    orderLocalDate: new Date("2023/5/23").toLocaleString(),
    trackingId: "SH08755",
    shippingStatus: "processing",
    shopForMeStatus: "Purchase completed",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "UK Warehouse (London)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08756",
    orderStatus: "responded",
    orderLocalDate: new Date("2023/6/23").toLocaleString(),
    trackingId: "SH08756",
    shippingStatus: "cleared",
    shopForMeStatus: "Purchase completed",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "US Warehouse (Richmond Texas)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08757",
    orderStatus: "responded",
    orderLocalDate: new Date("2023/7/23").toLocaleString(),
    trackingId: "SH08757",
    shippingStatus: "cancelled",
    shopForMeStatus: "Purchase completed",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "US Warehouse (Richmond Texas)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08758",
    orderStatus: "responded",
    orderLocalDate: new Date("2023/8/23").toLocaleString(),
    trackingId: "SH08758",
    shippingStatus: "delivered",
    shopForMeStatus: "Purchase completed",
    shopForMeCost: 107.76,
    shippingCost: 107.76,
    originWarehouse: "US Warehouse (Richmond Texas)",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const shopRequests: ShopRequestPackageType[] = [
  {
    requestId: "OD08751",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08752",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08753",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08754",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08755",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08756",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 1,
        quantity: 1,
        shippingCost: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const shopDrafts: ShopDraftPackageType[] = [
  {
    origin: "origin",
    items: [
      {
        store: "Amazon",
        urgent: false,
        url: "",
        name: "Designer Bags",
        originalCost: 0,
        quantity: 1,
        shippingCost: 0,
        image: src,
        description: "",
      },
    ],
  },
];

export const importOrders: ImportOrderPackageType[] = [
  {
    orderId: "OD08751",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08751",
    shippingStatus: "not started",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08752",
    orderStatus: "not responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08752",
    shippingStatus: "arrived destination",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08753",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08753",
    shippingStatus: "ready for shipping",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08754",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08754",
    shippingStatus: "in transit",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08755",
    orderStatus: "not responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08755",
    shippingStatus: "processing",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08756",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08756",
    shippingStatus: "cleared",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08757",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08757",
    shippingStatus: "cancelled",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08758",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08758",
    shippingStatus: "delivered",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const importRequests: ImportRequestPackageType[] = [
  {
    requestId: "OD08751",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08752",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08753",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08754",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08755",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08756",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const importDrafts: ImportDraftPackageType[] = [
  {
    origin: "origin",
    packageDeliveryStatus: "not started",
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    origin: "origin",
    packageDeliveryStatus: "not started",
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const exportOrders: ExportOrderPackageType[] = [
  {
    orderId: "OD08751",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08751",
    shippingStatus: "not started",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08752",
    orderStatus: "not responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08752",
    shippingStatus: "arrived destination",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08753",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08753",
    shippingStatus: "ready for shipping",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08754",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08754",
    shippingStatus: "in transit",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08755",
    orderStatus: "not responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08755",
    shippingStatus: "processing",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08756",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08756",
    shippingStatus: "cleared",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08757",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08757",
    shippingStatus: "cancelled",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    orderId: "OD08758",
    orderStatus: "responded",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08758",
    shippingStatus: "delivered",
    shippingCost: 107.76,
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 0,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const exportRequests: ExportRequestPackageType[] = [
  {
    requestId: "OD08751",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08752",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08753",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08754",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08755",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    requestId: "OD08756",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const exportDrafts: ExportDraftPackageType[] = [
  {
    origin: "origin",
    packageDeliveryStatus: "not started",
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
  {
    origin: "origin",
    packageDeliveryStatus: "not started",
    items: [
      {
        name: "Designer Bags",
        idType: "Tracking ID",
        idNumber: "123456789",
        deliveryStatus: "",
        deliveredBy: "",
        originalCost: 1,
        quantity: 1,
        image: src,
        description: "",
      },
    ],
  },
];

export const autoImportOrders: AutoImportOrderPackageType[] = [
  {
    orderId: "OD08756",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08756",
    shippingStatus: "not started",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },
  {
    orderId: "OD08755",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08755",
    shippingStatus: "ready for shipping",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },
  {
    orderId: "OD08754",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08754",
    shippingStatus: "cleared",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },
  {
    orderId: "OD08753",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08753",
    shippingStatus: "processing",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },

  {
    orderId: "OD08752",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08752",
    shippingStatus: "in transit",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },

  {
    orderId: "OD08751",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08751",
    shippingStatus: "arrived destination",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },
  {
    orderId: "OD08750",
    orderStatus: "processed",
    orderLocalDate: new Date().toLocaleString(),
    trackingId: "SH08750",
    shippingStatus: "delivered",
    shippingCost: 107.76,
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
  },
];

export const autoImportRequests: AutoImportRequestPackageType[] = [
  {
    requestId: "OD08756",
    requestStatus: "Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
    shipmentDetails: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipPostalCode: "",
    },
    billingDetails: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipPostalCode: "",
    },
  },
  {
    requestId: "OD08755",
    requestStatus: "Not Responded",
    requestLocalDate: new Date().toLocaleString(),
    items: [
      {
        brand: "asd",
        model: "asd",
        productionYear: "2023",
        value: 107.76,
        condition: "Drivable",
        color: "blue",
        mileage: 0,
        vin: "asdaasd123123",
        url: "https://www.asd.com/asdasd",
        image: src,
        carTitleCopy: src,
        description: "asdasdasdasd",
      },
    ],
    shipmentDetails: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipPostalCode: "",
    },
    billingDetails: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipPostalCode: "",
    },
  },
];

export const paymentData: PaymentPackageType[] = [
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'shop for me',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'import',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'auto import',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'export',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'shop for me',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'import',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'auto import',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
  {
      invoiceID: "IN6123578",
      orderId: "OD08756",
      service: 'export',
      paymentFor: 'Shipping Cost',
      totalCost: 107.76,
      createdAt: new Date().toLocaleString(),
      paidAt: new Date().toLocaleString(),
  },
];