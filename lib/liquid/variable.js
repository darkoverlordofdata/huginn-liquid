// Generated by CoffeeScript 1.11.1
(function() {
  var Liquid,
    slice = [].slice;

  Liquid = require('../liquid');

  Liquid.Variable = (function() {
    var FilterParser, compact, flatten, ref;

    FilterParser = RegExp("(?:" + Liquid.FilterSeparator.source + "|(?:\\s*(?!(?:" + Liquid.FilterSeparator.source + "))(?:" + Liquid.QuotedFragment.source + "|\\S+)\\s*)+)");

    ref = require('./util'), compact = ref.compact, flatten = ref.flatten;

    function Variable(markup) {
      var f, filterargs, filtername, filters, i, len, match, matches;
      this.markup = markup;
      this.name = null;
      this.filters = [];
      if (match = markup.match(RegExp("\\s*(" + Liquid.QuotedFragment.source + ")(.*)"))) {
        this.name = match[1];
        if (match[2].match(RegExp(Liquid.FilterSeparator.source + "\\s*(.*)"))) {
          filters = match[2].match(RegExp("" + FilterParser.source, "g"));
          for (i = 0, len = filters.length; i < len; i++) {
            f = filters[i];
            if (matches = f.match(/\s*(\w+)/)) {
              filtername = matches[1];
              filterargs = f.split(RegExp("(?:" + Liquid.FilterArgumentSeparator + "|" + Liquid.ArgumentSeparator + ")\\s*(" + Liquid.QuotedFragment.source + ")"));
              filterargs.shift();
              filterargs.pop();
              this.filters.push([filtername, compact(flatten(filterargs))]);
            }
          }
        }
      }
    }

    Variable.prototype.render = function(context) {
      var a, e, filter, filterargs, i, j, len, len1, output, ref1, ref2;
      if (this.name == null) {
        return '';
      }
      output = context.get(this.name);
      ref1 = this.filters;
      for (i = 0, len = ref1.length; i < len; i++) {
        filter = ref1[i];
        filterargs = [];
        ref2 = filter[1];
        for (j = 0, len1 = ref2.length; j < len1; j++) {
          a = ref2[j];
          filterargs.push(context.get(a));
        }
        try {
          output = context.invoke.apply(context, [filter[0], output].concat(slice.call(filterargs)));
        } catch (error) {
          e = error;
          throw new Liquid.FilterNotFound("Error - filter '" + filter[0] + "' in '" + (this.markup.trim()) + "' could not be found.");
        }
      }
      return output;
    };

    return Variable;

  })();

}).call(this);
