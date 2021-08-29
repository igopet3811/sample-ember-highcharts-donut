import Route from '@ember/routing/route';

export default class ExplainabilityRoute extends Route {
  async model() {
    let response = await fetch('/api/response.json');
    let parsed = await response.json();
    return parsed.data;
  }
}
