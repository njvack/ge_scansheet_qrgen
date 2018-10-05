var scansheet = function(url_string){
  var pub = {};
  pub.url_string = url_string;
  pub.url = new URL(url_string);
  pub.form_fields = [
    'patientLastName',
    'patientFirstName',
    'patientID',
    'weightPounds',
    'weightKgs',
    'dateOfBirth',
    '_years',
    '_months',
    '_weeks',
    '_days',
    'sex',
    '_sex2',
    'scheduledDate',
    'accession',
    'examDescription',
    'SPSDescription',
    'procedureID',
    'operatorLastName',
    'operatorFirstName',
    'radiologistLastName',
    'radiologistFirstName',
    'referringPhysicianLastName',
    'referringPhsyicianFirstName',
    'protocol'
  ]

  pub.form_str = function() {
    var fields = pub.form_fields.slice();
    var dateOfBirth = pub.url.searchParams.get('dateOfBirth');
    if (dateOfBirth) {
      // If dateOfBirth is specified, tab skips the age fields
      var yearIdx = fields.indexOf('_years');
      fields.splice(yearIdx, 4);
    }
    var string_parts = fields.map(function(field) {
      console.log(field);
      console.log(pub.url.searchParams.get(field));
      return pub.url.searchParams.get(field);
    })
    return string_parts.join("\t");
  };

  return pub;
};

window.scansheet = scansheet;
console.log("scansheet loaded");