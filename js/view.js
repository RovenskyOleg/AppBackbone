var Demo = Backbone.View.extend({
    first_name: "Oleg",

    model: new DemoModel(),

    test: function() {
        console.log("Hello" + " " + this.first_name);
    },

    events: {
        "click #show": "render", 
        "click #hide": "hide" 
    },

    inputToModel: function() {
        var key_person = ["first_name", "last_name"],
            key;

        // почему не работает
        //
        // $.each(key_person, function(key, element){
        //     this.model.set(key_person[key], $("#" + key_person[key]).val());
        //  });
        // this.model.set('first_name', $("#first_name").val());
        // this.model.set('last_name', $("#last_name").val());
       
        
        for(key in key_person) {
            this.model.set(key_person[key], $("#" + key_person[key]).val());
        }
    },

    render: function(e) {
        this.inputToModel();

        var attributeJSON = this.model.toJSON(),
            template,
            view_form;

        $(".view").removeClass("hiden");
        // template = $("#list").html(),
        // view_form = _.template(template,attributeJSON);
        // $(".view").html(view_form);

        template = _.template($("#list").html());
        $(".view").html(template(this.model.toJSON()));
    },

    hide: function(e) {
        $(".view").addClass("hiden");
    }
});