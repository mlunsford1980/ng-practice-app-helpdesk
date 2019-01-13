"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateValidators = /** @class */ (function () {
    function DateValidators() {
    }
    DateValidators.mustBeFuture = function (control) {
        var dueDate = new Date(control.value);
        var now = new Date(Date.now());
        return (dueDate < now)
            ? { mustBeFuture: { message: 'must be a future date' } }
            : null;
    };
    return DateValidators;
}());
exports.DateValidators = DateValidators;
//# sourceMappingURL=date.validators.js.map