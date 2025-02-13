// it is really useful for development
var mod = Vars.mods.getMod("schema")
var get = (pkg) => mod.loader.loadClass(pkg).newInstance()

// mod.loader is null on mobile devices
if (Vars.mobile) get = (pkg) => null;

const SchemeMain = mod.main
const SchemeVars = get("scheme.SchemeVars")
const SchemeUpdater = get("scheme.SchemeUpdater")
const Backdoor = get("scheme.Backdoor")
const ServerIntegration = get("scheme.ServerIntegration")
const ClajIntegration = get("scheme.ClajIntegration")
const ModedSchematics = get("scheme.moded.ModedSchematics")
