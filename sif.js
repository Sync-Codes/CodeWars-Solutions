class SmallestIntegerFinder {
    SmallestIntegerFinder(args) {
    //   args.sort((a, b) => a- b)
    //   return args
    return Math.min(...args)
    }
  }
  
  let sif = new SmallestIntegerFinder();
  console.log(sif.SmallestIntegerFinder([78,56,232,12,8]))