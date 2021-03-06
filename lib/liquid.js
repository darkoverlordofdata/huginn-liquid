// Generated by CoffeeScript 1.11.1

/*

Copyright (c) 2013 - 2014 Bruce Davidson darkoverlordofdata@gmail.com
Copyright (c) 2005, 2006 Tobias Luetke

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {
  var Liquid;

  module.exports = Liquid = (function() {
    function Liquid() {}

    Liquid.Liquid = Liquid;

    Liquid.FilterSeparator = /\|/;

    Liquid.ArgumentSeparator = ',';

    Liquid.FilterArgumentSeparator = ':';

    Liquid.VariableAttributeSeparator = '.';

    Liquid.TagStart = /\{\%/;

    Liquid.TagEnd = /\%\}/;

    Liquid.VariableSignature = /\(?[\w\-\.\[\]]\)?/;

    Liquid.VariableSegment = /[\w\-]/;

    Liquid.VariableStart = /\{\{/;

    Liquid.VariableEnd = /\}\}/;

    Liquid.VariableIncompleteEnd = /\}\}?/;

    Liquid.QuotedString = /"[^"]*"|'[^']*'/;

    Liquid.QuotedFragment = RegExp(Liquid.QuotedString.source + "|(?:[^\\s,\\|'\"]|" + Liquid.QuotedString.source + ")+");

    Liquid.StrictQuotedFragment = /"[^"]+"|'[^']+'|[^\s|:,]+/;

    Liquid.FirstFilterArgument = RegExp(Liquid.FilterArgumentSeparator + "(?:" + Liquid.StrictQuotedFragment.source + ")");

    Liquid.OtherFilterArgument = RegExp(Liquid.ArgumentSeparator + "(?:" + Liquid.StrictQuotedFragment.source + ")");

    Liquid.SpacelessFilter = RegExp("^(?:'[^']+'|\"[^\"]+\"|[^'\"])*" + Liquid.FilterSeparator.source + "(?:" + Liquid.StrictQuotedFragment.source + ")(?:" + Liquid.FirstFilterArgument.source + "(?:" + Liquid.OtherFilterArgument.source + ")*)?");

    Liquid.Expression = RegExp("(?:" + Liquid.QuotedFragment.source + "(?:" + Liquid.SpacelessFilter.source + ")*)");

    Liquid.TagAttributes = RegExp("(\\w+)\\s*\\:\\s*(" + Liquid.QuotedFragment.source + ")");

    Liquid.AnyStartingTag = /\{\{|\{\%/;

    Liquid.PartialTemplateParser = RegExp(Liquid.TagStart.source + ".*?" + Liquid.TagEnd.source + "|" + Liquid.VariableStart.source + ".*?" + Liquid.VariableIncompleteEnd.source);

    Liquid.TemplateParser = RegExp("(" + Liquid.PartialTemplateParser.source + "|" + Liquid.AnyStartingTag.source + ")");

    Liquid.VariableParser = RegExp("\\[[^\\]]+\\]|" + Liquid.VariableSegment.source + "+\\??");

    Liquid.LiteralShorthand = /^(?:\{\{\{\s?)(.*?)(?:\s*\}\}\})$/;

    Liquid.setPath = function(path) {
      Liquid.Template.fileSystem = new Liquid.LocalFileSystem(path);
      return Liquid;
    };

    Liquid.compile = function(template, options) {
      var t;
      t = Liquid.Template.parse(template);
      return function(context, options) {
        return t.render(context);
      };
    };

    return Liquid;

  })();

  require('./liquid/version');

  require('./liquid/drop');

  require('./liquid/errors');

  require('./liquid/interrupts');

  require('./liquid/strainer');

  require('./liquid/context');

  require('./liquid/tag');

  require('./liquid/block');

  require('./liquid/document');

  require('./liquid/variable');

  require('./liquid/filesystem');

  require('./liquid/template');

  require('./liquid/standardfilters');

  require('./liquid/condition');

  Liquid.Tags = (function() {
    function Tags() {}

    return Tags;

  })();

  require('./liquid/tags/assign');

  require('./liquid/tags/block');

  require('./liquid/tags/break');

  require('./liquid/tags/capture');

  require('./liquid/tags/case');

  require('./liquid/tags/comment');

  require('./liquid/tags/continue');

  require('./liquid/tags/cycle');

  require('./liquid/tags/decrement');

  require('./liquid/tags/extends');

  require('./liquid/tags/for');

  require('./liquid/tags/if');

  require('./liquid/tags/ifchanged');

  require('./liquid/tags/include');

  require('./liquid/tags/increment');

  require('./liquid/tags/raw');

  require('./liquid/tags/unless');

  require('./extras/liquidView');

}).call(this);
