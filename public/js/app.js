(function(){!function(n,r,e){var t,o,u,i,c,a;return o={production:"\n**************************************\n*     Application In Production!     *\n**************************************\n"},i=function(r,e,t,o){var u,i;return i=function(n){return e.resume(),n.result===!1?e.error(n.error):e.echo(n.result)},u=function(n,r,t){return e.resume(),e.error(t)},e.pause(),n.jrpc(r,t,o,i,u)},a=function(){var r;return r=function(n){switch(n.toLowerCase()){case"y":case"yes":return!0;default:return!1}},function(e,t,o){var u;return null==t&&(t=""),null==o&&(o=">"),u=n.Deferred(),""!==t&&e.echo(t),e.push(function(n){u.resolve(r(n)),e.pop()},{prompt:o}),u.promise()}}(),c=function(n,r){return 0===n.indexOf(r)},u=function(n,r,e,t,o){return null==t&&(t=function(){}),n===e?(o||(o=e),r.push(function(n){t(o+" "+n,r)},{prompt:o+">"}),!0):!1},t=function(r,e,t){var u,s,f,l;return u=n.terminal.parseCommand(r.trim()),u.name===t?(s=Terminal.endpoint[t],l=u.args,f=l.shift()||"list","artisan"===t&&"production"===Terminal.environment&&-1===n.inArray("--force",l)&&(c(f,"migrate")===!0&&c(f,"migrate:status")===!1||c(f,"db:seed")===!0)?a(e,o.production,"Do you really wish to run this command? [y/N] (yes/no) [no]:").done(function(n){return n===!0?(l.push("--force"),i(s,e,f,l)):e.echo("\nCommand Cancelled!")}):i(s,e,f,l),!0):!1},n(e.body).terminal(function(n,r){""!==n&&u(n,r,"artisan tinker",function(n,r){return t(n,r,"tinker")},"tinker")!==!0&&(t(n,r,"artisan")||r.error("Command '"+n+"' Not Found!"))},{onBlur:function(){return!1}})}(jQuery,window,document)}).call(this);