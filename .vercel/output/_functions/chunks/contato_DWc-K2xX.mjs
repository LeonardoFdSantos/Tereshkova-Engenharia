import { d as maybeRenderHead, i as renderComponent, m as createRenderInstruction, u as renderTemplate } from "./server_DLhQjhce.mjs";
import { t as createComponent } from "./compiler_Dw28oF9s.mjs";
import { n as $$Header, r as $$BaseLayout, t as $$Footer } from "./Footer_Dji212un.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/pages/contato.astro
var contato_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contato,
	file: () => $$file,
	url: () => $$url
});
var $$Contato = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Contato | Tereshkova Engenharia",
		"description": "Entre em contato com a Tereshkova Engenharia para solicitar orçamentos e informações sobre nossos serviços de engenharia elétrica.",
		"keywords": "contato Tereshkova Engenharia, orçamento engenharia elétrica, fale conosco, solicite orçamento"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main><!-- Page Header --><section class="page-header"><div class="container"><h1 class="page-title">Fale Conosco</h1><p class="page-subtitle">Estamos prontos para ajudar com seu projeto de engenharia elétrica.</p></div></section><!-- Contact Info Section --><section class="section contact-info-section"><div class="container"><div class="contact-info-grid"><div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-phone"></i></div><h3 class="contact-info-title">Telefone</h3><p class="contact-info-text">(69) 99215-8799</p><p class="contact-info-text">(55) 99642-7551</p></div><div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-envelope"></i></div><h3 class="contact-info-title">E-mail</h3><p class="contact-info-text">tereshkova.engenharia@gmail.com</p></div><div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div><h3 class="contact-info-title">Endereço</h3><p class="contact-info-text">Rua João da Fontoura e Souza, 215<br>Camobi, Santa Maria/RS - CEP: 97.105-210</p></div><div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-clock"></i></div><h3 class="contact-info-title">Horário</h3><p class="contact-info-text">Seg - Sex: 08h às 18h<br>Sáb: 08h às 12h</p></div></div></div></section><!-- Form Section --><section class="section form-section" id="formulario"><div class="container"><div class="form-container"><h2 class="section-title">Solicite um Orçamento</h2><p class="form-subtitle">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p><form action="https://formspree.io/f/mxxvjqkn" method="POST" class="contact-form" id="contact-form"><div class="form-grid"><div class="form-group"><label for="name" class="form-label">Nome Completo *</label><input type="text" id="name" name="name" class="form-input" placeholder="Digite seu nome" required></div><div class="form-group"><label for="email" class="form-label">E-mail *</label><input type="email" id="email" name="email" class="form-input" placeholder="seu@email.com" required></div><div class="form-group"><label for="phone" class="form-label">Telefone</label><input type="tel" id="phone" name="phone" class="form-input" placeholder="(XX) XXXXX-XXXX"></div><div class="form-group"><label for="company" class="form-label">Empresa</label><input type="text" id="company" name="company" class="form-input" placeholder="Nome da empresa"></div><div class="form-group full-width"><label for="service" class="form-label">Serviço de Interesse *</label><select id="service" name="service" class="form-input form-select" required><option value="" disabled selected>Selecione um serviço</option><option value="projetos-eletricos">Projetos Elétricos</option><option value="automacoes">Automações Elétricas</option><option value="instalacao-residencial">Instalação Elétrica Residencial</option><option value="instalacao-industrial">Instalação Elétrica Industrial</option><option value="reparos">Reparos Elétricos</option><option value="quadros">Quadros Elétricos e Medições</option><option value="laudos">Laudos Técnicos e Medições</option><option value="outro">Outro</option></select></div><div class="form-group full-width"><label for="message" class="form-label">Mensagem *</label><textarea id="message" name="message" class="form-input form-textarea" placeholder="Descreva seu projeto ou dúvida..." rows="5" required></textarea></div></div><div class="form-actions"><p class="form-privacy"><i class="fas fa-lock"></i> Seus dados estão seguros. Não compartilhamos informações com terceiros.</p><button type="submit" class="btn btn-primary btn-large" id="submit-btn"><span>Enviar Mensagem</span><i class="fas fa-paper-plane"></i></button></div></form><div class="form-status" id="form-status"></div></div></div></section><!-- Map Section (Placeholder) --><section class="section map-section"><div class="container"><div class="map-placeholder"><i class="fas fa-map-marked-alt"></i><p>Mapa interativo em breve</p><p class="map-address">Rua Exemplo, 123 - Cidade/UF</p></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Drivers/OneDriveLeo/OneDrive/Coisas_Leonardo/gits/Tereshkova_Engenharia/src/pages/contato.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Drivers/OneDriveLeo/OneDrive/Coisas_Leonardo/gits/Tereshkova_Engenharia/src/pages/contato.astro", void 0);
var $$file = "D:/Drivers/OneDriveLeo/OneDrive/Coisas_Leonardo/gits/Tereshkova_Engenharia/src/pages/contato.astro";
var $$url = "/contato";
//#endregion
//#region \0virtual:astro:page:src/pages/contato@_@astro
var page = () => contato_exports;
//#endregion
export { page, __exportAll as t };
