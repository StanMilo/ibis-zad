
var CONTRACT_DATA = [
    {mac:'58-90-77-22-75-5C', contract:54867972},
    {mac:'5A-3D-30-13-8F-15', contract:31495080},
    {mac:'A3-43-AE-41-2E-D7', contract:31452503},
    {mac:'B6-06-F6-C7-D5-04', contract:79238775},
    {mac:'9D-01-4A-A4-CB-91', contract:39531833},
    {mac:'D7-C4-71-4A-47-35', contract:33992438},
    {mac:'0D-D3-6B-05-86-59', contract:93603004}
];

var CONTRACTS = [
    54867972,
    31495080,
    31452503,
    79238775,
    39531833,
    33992438,
    93603004
];

var FilterForm = function(validator) {
    this.validator = validator
    document.getElementById('filter-form').addEventListener("submit", this.onSubmit.bind(this));
    this.initAutoComplete();
};

FilterForm.prototype = {

    onSubmit: function(event)
    {
        event.preventDefault();
        var macInput = document.getElementById('mac-id');
        var contractInput = document.getElementById('contract-id');
        
        if(!this.validator.macAddress(macInput.value)){
            console.log('Not Valid Mac Address', macInput.value);
            return false;
        }

        if(!this.validator.contract(contractInput.value)){
            console.log('Not valid Contract', contractInput.value);
            return false;
        }

        document.getElementById('filter-form').submit();

    },

    initAutoComplete: function()
    {   
        var awesomplete = new Awesomplete(document.getElementById('contract-id'));
        awesomplete.list = CONTRACTS;
        document.getElementById('contract-id').addEventListener("awesomplete-select", function(event) {
            var contractData = CONTRACT_DATA.find(function(data){ 
                return data.contract === event.text.value }
            );
            document.getElementById('mac-id').value = contractData.mac    
        });
    }

};

var Validator = {

    macAddress: function(value)
    {   
        var regexp = /^(([A-Fa-f0-9]{2}[-]){5}[A-Fa-f0-9]{2}[,]?)+$/i;
        return regexp.test(value);    
    },

    contract: function(value)
    {
        // TODO - validate contract id
        return true;
    }

}

new FilterForm(Validator);
