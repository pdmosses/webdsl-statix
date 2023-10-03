---
title: WebDSL-Generated.sdf3
---

# `WebDSL-Generated.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Generated.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Generated.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Generated.sdf3 "The source file on GitHub"

<div class="sdf3"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Generated_237_253" id="WebDSL-Generated_7_23" title="Referenced at ../webdsl-statix.sdf3 line 15">WebDSL-Generated</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_35_46" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_49_63" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

/*
  <span class="keyword">Add sort and constructors for elements that can be generated durig the desugaring phase</span>.
  <span class="keyword">This is a workaround for the lack of string manipulation in Statix at the time of writing</span>.

  <span class="keyword">The GeneratedElement is never supposed to be the result of parsing</span>.
*/

<span class="keyword">context-free sorts</span>

  <a href="#GeneratedElement_718_734" id="GeneratedElement_349_365" title="Referenced at line 28">GeneratedElement</a>

<span class="keyword">context-free syntax</span>

  <a href="#GeneratedElement_718_734" id="GeneratedElement_390_406" title="Referenced at line 28">GeneratedElement</a>.<span class="cons_Constructor"><a href="#Generated_735_744" id="Generated_407_416" title="Referenced at line 28">Generated</a></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_421_423" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>*&gt;&gt;

  <a href="#Definition_590_600" id="Definition_430_440" title="Referenced at line 27">Definition</a>.<span class="cons_Constructor"><a href="#GeneratedDefinition_601_620" id="GeneratedDefinition_441_460" title="Referenced at line 27">GeneratedDefinition</a></span> = &lt;&lt;<a href="#GeneratedElement_349_365" id="GeneratedElement_465_481" title="Defined at line 16, 20">GeneratedElement</a>&gt;&gt;
  <a href="#EntityBodyDeclaration_658_679" id="EntityBodyDeclaration_486_507" title="Referenced at line 28">EntityBodyDeclaration</a>.<span class="cons_Constructor"><a href="#GeneratedEntityBodyDeclaration_680_710" id="GeneratedEntityBodyDeclaration_508_538" title="Referenced at line 28">GeneratedEntityBodyDeclaration</a></span> = &lt;&lt;<a href="#GeneratedElement_349_365" id="GeneratedElement_543_559" title="Defined at line 16, 20">GeneratedElement</a>&gt;&gt;

<span class="keyword">context-free priorities</span>

  <a href="#Definition_430_440" id="Definition_590_600" title="Defined at line 22">Definition</a>.<span class="cons_Constructor"><a href="#GeneratedDefinition_441_460" id="GeneratedDefinition_601_620" title="Defined at line 22">GeneratedDefinition</a></span> &lt;0&gt; .&gt; <a href="#GeneratedElement_349_365" id="GeneratedElement_628_644" title="Defined at line 16, 20">GeneratedElement</a>.<span class="cons_Constructor"><a href="#Generated_407_416" id="Generated_645_654" title="Defined at line 20">Generated</a></span>,
  <a href="#EntityBodyDeclaration_486_507" id="EntityBodyDeclaration_658_679" title="Defined at line 23">EntityBodyDeclaration</a>.<span class="cons_Constructor"><a href="#GeneratedEntityBodyDeclaration_508_538" id="GeneratedEntityBodyDeclaration_680_710" title="Defined at line 23">GeneratedEntityBodyDeclaration</a></span> &lt;0&gt; .&gt; <a href="#GeneratedElement_349_365" id="GeneratedElement_718_734" title="Defined at line 16, 20">GeneratedElement</a>.<span class="cons_Constructor"><a href="#Generated_407_416" id="Generated_735_744" title="Defined at line 20">Generated</a></span>

</code></pre></td></tr></tbody></table></div>