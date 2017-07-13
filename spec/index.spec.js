var expect = chai.expect;

describe('capitalizeFirstLetter ', function(){

  it('should capitalize the first letter in the string - test 1', function(){    

    var capitalizedName = capitalizeFirstLetter('james');

    expect(capitalizedName).to.equal('James');
  });

  it('should capitalize the first letter in the string - test 2', function(){    

    var capitalizedName = capitalizeFirstLetter('jerry');

    expect(capitalizedName).to.equal('Jerry');
  });

  it('should capitalize the first letter in the string - test 3', function(){    

    var capitalizedName = capitalizeFirstLetter('Tom Sawer');

    expect(capitalizedName).to.equal('Tom Sawer');
  });

  it('should capitalize the first letter in the string - test 3', function(){    

    var capitalizedName = capitalizeFirstLetter('r K Adarsh');

    expect(capitalizedName).to.equal('R K Adarsh');
  });
});