class NaturalController {
  constructor() {
    this.currentSolution = {
      solution: "Solution",
      industry: "",
      product: ""
    };
    this.currentMenu = {
      solution: false,
      industry: false,
      product: false
    };
    this.solutions = {
      Solution: [{
        "name": "Solution 1",
        "industry": "Finance",
        "product": "ITOM"
      },
      {
        "name": "Solution 2",
        "industry": "Finance",
        "product": "ITSM"
      },
      {
        "name": "Solution 3",
        "industry": "Education",
        "product": "ITSM"
      },
      {
        "name": "Solution 4",
        "industry": "Media",
        "product": "HR Service Automation"
      },
      {
        "name": "Solution 5",
        "industry": "Federal",
        "product": "ITSM"
      },
      {
        "name": "Solution 6",
        "industry": "Federal",
        "product": "ITBM"
      },
      {
        "name": "Solution 7",
        "industry": "Retail",
        "product": "Knowledge Management"
      },
      {
        "name": "Solution 8",
        "industry": "Retail",
        "product": "SIAM"
      },
      {
        "name": "Solution 9",
        "industry": "Technology",
        "product": "Work Management"
      },
      {
        "name": "Solution 10",
        "industry": "Services",
        "product": "Asset Management"
      }],
      "Solution Wins": [{
        "name": "Solution Wins 1",
        "industry": "Finance",
        "product": "IT Cost Management"
      },
      {
        "name": "Solution Wins 2",
        "industry": "Finance",
        "product": "Facilities Service Management"
      },
      {
        "name": "Solution Wins 3",
        "industry": "Education",
        "product": "Facilities Service Management"
      },
      {
        "name": "Solution Wins 4",
        "industry": "Media",
        "product": "HR Service Automation"
      },
      {
        "name": "Solution Wins 5",
        "industry": "Federal",
        "product": "Facilities Service Management"
      },
      {
        "name": "Solution Wins 6",
        "industry": "Federal",
        "product": "IT Governance, Risk, and Compliance"
      },
      {
        "name": "Solution Wins 7",
        "industry": "Media",
        "product": "Knowledge Management"
      },
      {
        "name": "Solution Wins 8",
        "industry": "Media",
        "product": "IT Governance, Risk, and Compliance"
      },
      {
        "name": "Solution Wins 9",
        "industry": "Technology",
        "product": "Work Management"
      },
      {
        "name": "Solution Wins 10",
        "industry": "Technology",
        "product": "Asset Management"
      }]
    };
  }
  modalType(item = 'all') {
    if (item === 'all') {
      this.resetCurrentMenu();
      return;
    }
    this.currentMenu[item] = !this.currentMenu[item];
  }
  setCurrentSolution(solution, property) {
    this.currentSolution[property] = solution;
    this.modalType(property);
  }
  getIndustries() {
    let industries = [];
    if (this.currentSolution.solution) {
      industries = this.solutions[this.currentSolution.solution];
    } else {
      Object.keys(this.solutions)
        .forEach((solution) => {
          industries = industries.concat(this.solutions[solution]);
        });
    }

    return this.getUniqueItems(industries, 'industry');
  }
  getProducts() {
    let products =  [];
    if (this.currentSolution.solution && this.currentSolution.industry) {
      products = this.solutions[this.currentSolution.solution]
        .filter((solution) => solution.industry === this.currentSolution.industry);
    } else {
      Object.keys(this.solutions)
        .forEach((solution) => {
          products = products.concat(this.solutions[solution]);
        });
    }

    return this.getUniqueItems(products, 'product');
  }
  getUniqueItems(array, property) {
    return array.reduce((items, item) => {
      if (items.indexOf(item[property]) === -1) {
        items.push(item[property]);
      }
      return items;
    }, []);
  }
  resetCurrentMenu() {
    Object.keys(this.currentMenu).forEach((menu) => this.currentMenu[menu] = false);
  }
  getResults() {
    return this.solutions[this.currentSolution.solution]
      .filter((solution) => {
        return !this.currentSolution.industry ? true : solution.industry === this.currentSolution.industry;
      })
      .filter((solution) => {
        return !this.currentSolution.product ? true : solution.product === this.currentSolution.product;
      });
  }
}

export default NaturalController;
