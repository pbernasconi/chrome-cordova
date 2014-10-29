var Connection = {
    UNKNOWN: "unknown",
    ETHERNET: "ethernet",
    WIFI: "wifi",
    CELL_2G: "2g",
    CELL_3G: "3g",
    CELL_4G: "4g",
    CELL: "cellular",
    NONE: "none"
};


var connection = {};
connection.type = "Connection.WIFI";


window.navigator.connection = connection;
window.Connection = Connection;
