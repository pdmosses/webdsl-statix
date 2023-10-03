---
title: emails.stx
hide:
  - toc
---

# `emails.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/emails.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/emails.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/actions/emails.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
2
3
4
5
6
7
8
9
10
11
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-actions.stx#static-semantics/actions/emails_121_152" id="static-semantics/actions/emails_7_38" title="Referenced at ../../webdsl-actions.stx line 6">static-semantics/actions/emails</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_50_82" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_86_109" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_120_129" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SendEmailFunctionCall_6579_6600" id="SendEmailFunctionCall_133_154" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 189">SendEmailFunctionCall</a>(<span id="e_155_156" title="Not referenced locally, nor via imports">e</span>)) = <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_161_165" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<span id="s_166_167" title="Not referenced locally, nor via imports">s</span>) :- /* <span class="keyword">TO-DO</span>: <span class="keyword">implement validation of email call</span> */
    <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis of email call not yet implemented] .

</code></pre></td></tr></tbody></table></div>