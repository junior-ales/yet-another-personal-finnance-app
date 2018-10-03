"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var moment = require("moment");
var R = require("ramda");
var React = require("react");
var react_vis_1 = require("react-vis");
require("./spendingChart.css");
exports.defaultProps = {
    dataValue: [
        {
            category: 'fixed-expense',
            date: moment(),
            description: ' bla',
            id: '1',
            trackingPeriodId: '52',
            type: 'debit',
            value: -0.5
        },
        {
            category: 'fixed-expense',
            date: moment(),
            description: ' bla',
            id: '2',
            trackingPeriodId: '52',
            type: 'debit',
            value: -2.5
        },
        {
            category: 'fixed-expense',
            date: moment(),
            description: ' bla',
            id: '3',
            trackingPeriodId: '52',
            type: 'debit',
            value: -3
        },
        {
            category: 'fixed-expense',
            date: moment(),
            description: ' bla',
            id: '4',
            trackingPeriodId: '52',
            type: 'debit',
            value: -4
        }
    ]
};
var onlyDebit = function (ts) {
    return ts.filter(function (t) { return t.type === 'debit'; });
};
var sumValues = function (ts) {
    return ts.reduce(function (acc, t) { return acc + t.value; }, 0);
};
var byCategory = R.groupBy(function (t) { return t.category; });
var mapTransactionDetailsToChartData = function (tRecord) {
    return Object.entries(tRecord).map(function (_a) {
        var category = _a[0], value = _a[1];
        return ({
            angle: value,
            label: category
        });
    });
};
var fromDataValuesToChartData = R.compose(mapTransactionDetailsToChartData, R.map(sumValues), byCategory, onlyDebit);
var COLOR_RANGE = ['#79C7E3', '#FF9833', '#1A3177', '#12939A'];
var dataValues = [
    { angle: 1, label: 'Number 1' },
    { angle: 5, label: 'Alt Label' },
    { angle: 5, label: 'Sub Label only' },
    { angle: 3, label: 'Number 3' }
];
var SpendingChart = /** @class */ (function (_super) {
    __extends(SpendingChart, _super);
    function SpendingChart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: false };
        return _this;
    }
    SpendingChart.prototype.render = function () {
        return (React.createElement("section", { className: "SpendingChart" },
            React.createElement(react_vis_1.RadialChart, { className: "SpendingChart-chart", innerRadius: 50, radius: 70, data: fromDataValuesToChartData(exports.defaultProps.dataValue || []), width: 200, height: 200, padAngle: 0.04 }),
            React.createElement(react_vis_1.DiscreteColorLegend, { className: "SpendingChart-legend", orientation: "vertical", items: dataValues.map(function (d, idx) { return ({
                    color: COLOR_RANGE[idx],
                    disabled: false,
                    title: d.label
                }); }) })));
    };
    return SpendingChart;
}(React.Component));
exports["default"] = SpendingChart;
