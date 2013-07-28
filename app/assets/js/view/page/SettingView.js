define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page/settingTpl.html'
], function ($, _, Backbone, tpl) {

    var SettingView = Backbone.View.extend({
        el: $("#content"),
        template: _.template(tpl),
        render: function () {
            this.$el.html(this.template).trigger('create');
            return this;
        }
    });

    return SettingView;
});