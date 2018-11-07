(function(window, log, exception) {
    "use strict";

    var dependecies = {};

    $resolver = function(name, dependecy) {
        if (dependecy) {
            dependecies[name] = dependecy;
        } else {
            if (!dependecies.hasOwnProperty(name)) {
                var msg = name + " does not exists in $resolver.";
                log.error(msg);
                throw new exception(msg);
            }
        }
        return dependecies[name];
    };

    $resolver.prototype.constructor.has = function(name) {
        return dependecies.hasOwnProperty(name);
    };

    $resolver.prototype.constructor.remove = function(name) {
        if (dependecies.hasOwnProperty(name)){
            delete dependecies[name];
        }
    };

    $resolver.prototype.constructor.service = function(name, dependecy) {
        $resolver(name, dependecy).extend = function(name, value) {
            var s = this;
            if (s.hasOwnProperty(name)) {
                var msg = name + " is already registered in $resolver.";
                log.error(msg);
                throw new exception(msg);
            } else {
                s[name] = value;
            }
            return s;
        };

    };

    $resolver.prototype.constructor.extend = function(serviceName, name, value) {
        var msg = "";
        if (!dependecies.hasOwnProperty(serviceName)) {
            msg = name + "  does not exists in $resolver.";
            log.error(msg);
            throw new exception(msg);
        } else {
            dependecies[serviceName].extend(name, value);
        }
        return this;
    };

    Object.freeze($resolver);
    window.$resolver = $resolver;
})(this, this.console, this.Error);