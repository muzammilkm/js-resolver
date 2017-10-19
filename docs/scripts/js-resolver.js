(function(window) {
    var dependecies = {},
        log = window.console,
        exception = window.Error;

    $resolver = function(name, dependecy) {
        if (dependecy) {
            dependecies[name] = dependecy;
        } else {
            if (!dependecies.hasOwnProperty(name)) {
                var msg = name + " that you looking does not exists";
                log.error(msg);
                throw new exception(msg);
            }
        }
        return dependecies[name];
    };

    $resolver.prototype.constructor.service = function(name, dependecy) {
        $resolver(name, dependecy).extend = function(name, value) {
            var s = this;
            if (s.hasOwnProperty(name)) {
                var msg = " already has property by " + name;
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
            msg = name + " that you looking does not exists";
            log.error(msg);
            throw new exception(msg);
        } else {
            dependecies[serviceName].extend(name, value);
        }

        return this;
    };

    Object.freeze($resolver);
    window.$resolver = $resolver;
})(this);