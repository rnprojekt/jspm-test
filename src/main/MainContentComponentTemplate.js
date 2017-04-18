
export let template = {};

const card_app1 = `
<div class="card module">
  <div class="card-image">
  </div>
  <div class="card-header">
    <h4 class="card-title">Microsoft</h4>
    <h6 class="card-meta">Software and hardware</h6>
  </div>
  <div class="card-body">
    To make a contribution to the world by making tools for the mind that advance humankind.
  </div>
  <div class="card-footer">
    <button id="{{=it.id}}/app1" class="btn btn-primary">Start Module</button>
  </div>
</div>
`;

const card_empty = `
<div class="card module" style="display: table; width: 100%;">
  <div class="card-body" style="display: table-cell; vertical-align: middle; text-align: center;">
    In progress
  </div>
</div>
`;

template._default = `
<div style="display: table-cell; vertical-align: middle; text-align: center;" >
  {{=it.id}}: MainContentComponentTemplate
</div>
`;

template.default = `
<div style="display: table-cell; vertical-align: top; text-align:center;" >

<div class="container">
  <div class="columns">
    <div class="column col-xs-4">
    ${card_app1}
    </div>
    <div class="column col-xs-4">
    ${card_empty}
    </div>
    <div class="column col-xs-4">
    ${card_empty}
    </div>
  </div>
</div>

</div>
`;
