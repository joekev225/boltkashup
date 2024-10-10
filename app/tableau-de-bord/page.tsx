"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function TableauDeBord() {
  const [solde, setSolde] = useState(1000); // Exemple de solde
  const [transactions, setTransactions] = useState([
    { id: 1, montant: 100, date: '2023-04-01', statut: 'Complété' },
    { id: 2, montant: 250, date: '2023-04-02', statut: 'En attente' },
    // Ajoutez d'autres transactions d'exemple ici
  ]);
  const [montantRetrait, setMontantRetrait] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast, showToast } = useToast();

  const handleDemandeRetrait = () => {
    const montant = parseFloat(montantRetrait);
    if (isNaN(montant) || montant <= 0 || montant > solde) {
      showToast({
        message: "Veuillez entrer un montant valide inférieur ou égal à votre solde.",
        type: "error",
      });
      return;
    }

    // Ici, vous implémenteriez la logique pour envoyer la demande de retrait
    console.log(`Demande de retrait de ${montant} € envoyée`);
    showToast({
      message: `Votre demande de retrait de ${montant} € a été envoyée avec succès.`,
      type: "success",
    });
    setIsDialogOpen(false);
    setMontantRetrait('');
  };

  return (
    <div className="container mx-auto p-8">
      {/* ... Le reste du code reste inchangé ... */}
      {toast && (
        <div className={`fixed top-4 right-4 p-4 rounded-md ${
          toast.type === 'success' ? 'bg-green-500' :
          toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}