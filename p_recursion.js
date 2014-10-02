var getDependencies = function(tree, result) {
  result = result || [];
  var dependencies = tree.dependencies || []

  Object.keys(dependencies).forEach(function(name){
    var dependency     = tree.dependencies[name];
    var dependencyName = name+'@'+dependency.version;

    if ( result.indexOf(dependencyName) === -1 ) result.push(dependencyName);

    return getDependencies(dependency, result);
  });

  return result.sort();
};

module.exports = getDependencies;
