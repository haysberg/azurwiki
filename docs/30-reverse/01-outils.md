---
title: Outils de RE
sidebar_label: Outils
pagination_label: Outils de RE
description: Quelques outils de RE
keywords:
  - docs
  - Reverse Engineering
---

# Outils
Voici une liste de plusieurs outils de reverse engineering

## Désassembleurs
- [IDA Pro](https://hex-rays.com/ida-pro/) : Un des outils les plus populaires pour l'analyse de code binaire, permettant de décompiler, de désassembler et d'analyser des programmes exécutables.

- [Ghidra](https://ghidra-sre.org/) : Un framework d'analyse de code développé par la National Security Agency (NSA) des États-Unis, offrant des fonctionnalités similaires à IDA Pro.

- [Radare2](https://rada.re/n/radare2.html) : Une boîte à outils open source pour l'analyse binaire, fournissant des fonctionnalités de désassemblage, de décompilation, de débogage et de manipulation de code.

- [Cutter](https://cutter.re/) : Une interface utilisateur graphique (GUI) basée sur Radare2, offrant une expérience de reverse engineering conviviale.

## Debuggers
- [x64DBG](https://x64dbg.com/#features) : x64dbg est un débogueur open source pour les plateformes Windows qui se concentre sur le reverse engineering et l'analyse de logiciels. Il est spécifiquement conçu pour le débogage des programmes 64 bits (x64)
  
- [OllyDbg](https://www.ollydbg.de/) : Un débogueur de code binaire pour Windows, utilisé pour l'analyse dynamique de programmes exécutables.

- [GDB](https://www.sourceware.org/gdb/) : GDB, the GNU Project debugger, allows you to see what is going on `inside' another program while it executes -- or what another program was doing at the moment it crashed.
GDB can run on most popular UNIX and Microsoft Windows variants, as well as on Mac OS X.
 

## Analyse Symbolique
- [Z3](https://github.com/Z3Prover/z3) : Z3 est un solveur de contraintes automatique développé par Microsoft Research. Il est utilisé pour résoudre des problèmes complexes impliquant des contraintes logiques et arithmétiques. Z3 peut être utilisé dans le cadre du reverse engineering pour résoudre des problèmes de vérification de modèles, de rétro-ingénierie de protocoles, d'optimisation de code, de détection de vulnérabilités, et plus encore.
  
- [Angr](https://angr.io/) : Angr est un framework open source d'analyse binaire développé en Python. Il fournit une suite d'outils pour l'analyse automatique de programmes exécutables, en utilisant des techniques de symbolisation, de désassemblage et de résolution de contraintes. Angr est utilisé pour effectuer des tâches telles que la recherche de chemins d'exécution spécifiques, la génération automatique de tests et l'exploration de code.

## Autres
- [Remnux](https://docs.remnux.org/): A Linux toolkit for reverse-engineering and analyzing malicious software. REMnux provides a curated collection of free tools created by the community. Analysts can use it to investigate malware without having to find, install, and configure the tools.