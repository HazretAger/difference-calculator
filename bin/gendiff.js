#!/usr/bin/env node
import { Command } from 'commander';
import mapDiff from '../src/index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, formatName) => {
    console.log(mapDiff(filepath1, filepath2, formatName.format));
  })
  .parse(process.argv);
