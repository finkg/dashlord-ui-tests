const endpoints = {
    project: (client, dashboard) =>
        `v1/clients/${client}/project/${dashboard}`,
    login: (client, dashboard) =>
        `v1/clients/${client}/project/${dashboard}/login`,
    data: (client, dashboard) =>
        `v1/clients/${client}/dashboards/${dashboard}/data`,
    summary: (client, dashboard) =>
        `v1/clients/${client}/dashboards/${dashboard}/summary`,
    widget: (client, dashboard, id) =>
        `v1/clients/${client}/dashboards/${dashboard}/data/widgets/${id}`,
}

export default endpoints