export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ Prâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ ${JSON.stringify(retorno)}`);
        
        return retorno;
    }
    return descriptor;
}